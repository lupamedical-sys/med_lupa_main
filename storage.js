const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Your Supabase credentials
const supabaseUrl = 'https://zdomkedllpcjnqtzmbut.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkb21rZWRsbHBjam5xdHptYnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxODk5MjUsImV4cCI6MjA4NTc2NTkyNX0.cHc03V08AjtniEGDBLqrpYz2TcemrbJzfJ3u2FrJ0-E'; 
// Use SERVICE_ROLE_KEY only on backend (never frontend)

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

// async function uploadFile() {
//     try {
//         const fileBuffer = fs.readFileSync('./example.png');

//         const { data, error } = await supabase
//             .storage
//             .from('my-bucket') // your bucket name
//             .upload('uploads/example.png', fileBuffer, {
//                 contentType: 'image/png',
//                 upsert: true
//             });

//         if (error) {
//             console.error('Upload error:', error.message);
//         } else {
//             console.log('File uploaded:', data);
//         }

//     } catch (err) {
//         console.error('Unexpected error:', err.message);
//     }
// }

// uploadFile();

// app.delete('/delete-file', async (req, res) => {
//   const { path } = req.body;

//   const { error } = await supabase
//     .storage
//     .from('my-bucket')
//     .remove([path]);

//   if (error) {
//     return res.status(400).json({ error: error.message });
//   }

//   res.json({ message: 'File deleted successfully' });
// });

// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     const file = req.file;
//     const filePath = `uploads/${Date.now()}_${file.originalname}`;

//     const { data, error } = await supabase
//       .storage
//       .from('my-bucket') // your bucket name
//       .upload(filePath, file.buffer, {
//         contentType: file.mimetype,
//         upsert: false
//       });

//     if (error) {
//       return res.status(400).json({ error: error.message });
//     }

//     const { data: publicUrlData } = supabase
//       .storage
//       .from('my-bucket')
//       .getPublicUrl(filePath);

//     res.json({
//       message: 'File uploaded successfully',
//       path: filePath,
//       url: publicUrlData.publicUrl
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Upload failed' });
//   }
// });
