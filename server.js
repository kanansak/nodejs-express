// นำเข้า Express และ MySQL module
const express = require('express');
const cors = require('cors');

// สร้าง Express application
const app = express();

// ใช้ middleware CORS ใน Express
app.use(cors());
app.use(express.json());


// นำเส้นทาง GET จากไฟล์ get.js
const getRoutes = require('./Devices/latestData');
app.use(getRoutes);

// นำเส้นทาง POST จากไฟล์ post.js
const postRoutes = require('./post');
app.use(postRoutes); // กำหนดเส้นทางที่จะเชื่อมกับ postRoutes ในที่นี้คือ '/post-route'


// นำเส้นทาง CRUD ของผู้ใช้งานมาใช้
 const userRoutes = require('./User/api-user'); // นำเข้าไฟล์ CRUD ของผู้ใช้งาน
 app.use(userRoutes);

//http://localhost:3000/api/data
const dataRouter = require('./api');
app.use('/api', dataRouter);

//http://localhost:3000/devices/
const deviceRouter = require('./Devices/api-device')
app.use(deviceRouter);

const datadevice = require('./Devices/data-device')
app.use('/test',datadevice);

const data =require('./Devices/data')
app.use(data);

const auth0 = require('./User/auth0')
app.use(auth0);

// รัน Express server ที่พอร์ตที่คุณต้องการ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์ทำงานที่พอร์ต ${PORT}`);
});