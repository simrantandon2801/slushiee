const router=require("express").Router();
const bcrypt=require('bcrypt');
const Joi = require("joi");
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const{User,validate}=require('./Model/user');


const validate1 = (data) => {
	const schema = Joi.object({
		Email: Joi.string().email().required().label("Email"),
		Password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

router.post("/Login1", async (req, res) => {
	try {
    console.log(req.body);
		const { error } = validate1(req.body);
    console.log(error);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ Email: req.body.Email });
    console.log(user)
		if (!user)
    
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.Password,
			user.Password
		);
    console.log(validPassword)
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		const token = user.generateAuthToken();
    console.log(token)
		
		res.status(200).send({ data: token, message: "logged in successfully" }
		);
		
	
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


// router.post('/Onetime1',async(req,res)=>{
// 	const otp = req.body.otp;
// 	console.log(req.body,'verify')
// 	try {
// 	  const user = await User.findOne({ otp });
// 	  if (!user) {
// 		res.status(401).json({ error: "OTP is invalid" });
// 		return;
// 	  }
// 	  // Reset the OTP
	 
// 	  // Show the password reset form
// 	  res.json({ message: "OTP is valid" });
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).json({ error: "Something went wrong" });
// 	}
// })


router.get('/user/:userId', async (req, res) => {
	try {
	  const userId = req.params.userId; //dynamic value ati h
    
      console.log(userId)
	  // Fetch the user data from MongoDB based on the provided user ID
	  const user = await User.findById(userId);
	  if (!user) {
		return res.status(404).json({ error: 'User not found' });
	  }
  
	  // Return the user data as the API response
	  res.json(user);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Internal server error' });
	}
  });

let storedOTP='';
router.post('/sign1',async(req,res)=>{
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sales@hubhawks.com',
      pass: 'rkcknmtciawqanpq'
    }
  });
  const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false });
storedOTP=otp
  // Create the email message
  const mailOptions = {
    from: 'sales@hubhawks.com',
    to: req.body.Email, // Assuming the email is sent in the request body
    subject: 'OTP Verification',
    text: `Your OTP code is: ${otp}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send OTP' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'OTP sent successfully' });
    }
  });

})
router.post('/Otp1',async(req,res)=>{
  const userOTP = req.body.Otp; // Assuming the OTP is sent in the request body

  // Assuming you have stored the generated OTP in a variable or database
  if (userOTP === storedOTP) {
    res.status(200).json({ message: 'OTP verification successful' });
  } else {
    res.status(400).json({ error: 'OTP verification failed' });
  }

})
router.post('/slush',async(req,res)=>{
  const { Name, Email,Password,confirmPassword, DOB } = req.body;
  try {
    console.log(req.body);
    const { day, month, year } = DOB;
    const dob = `${year}-${month}-${day}`;
    console.log(dob,'date')
    const { error } = validate({Name, Email,Password,confirmPassword, dob });
    console.log(error, "checking");

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    console.log(User)
    const user = await User.findOne({ Email: req.body.Email });
    console.log(user, "1st");

    if (user) {
      return res.status(409).send({ message: "User with given email already exists!" });
    }

    console.log("No user found in the database");

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    console.log("Salt generated");

    const hashedPassword = await bcrypt.hash(req.body.Password, salt);
    console.log("Password hashed");

    const newUser = new User({ ...req.body, Password: hashedPassword });
    await newUser.save();

    console.log("User created successfully");

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.post("/update-password", async (req, res) => {
	const password = req.body.NewPassword;
		const email = req.body.email;
		console.log(password,email,'yes')
		try {
			
			const user = await User.findOne({ email }); 
			console.log(user)
		  // Hash the password
		  const salt = await bcrypt.genSalt(10);
		  const hashedPassword = await bcrypt.hash(password, salt);
		  // Update the password
		  console.log(hashedPassword)
			await User.updateOne({ email: user }, { $set: { Password: hashedPassword } });
			console.log(user,password,email)
		  res.json({ message: "Password updated successfully" });
		} catch (error) {
		  console.error(error);
		  res.status(500).json({ error: "Something went wrong" });
		}
	});
module.exports=router
