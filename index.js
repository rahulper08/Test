const fs =require('fs');
const path=require('path');
const dirPath =path.join(__dirname,'files');
for(i=10;i<15;i++)
    {
        fs.writeFileSync(dirPath+"/hello"+i+".txt","heloo i am rahul");

    }
    fs.readdir(dirPath,(err,files)=>{
        files.forEach((item) => {
           console.log("File Name is ",item)
        });
        // console.log(files)
    })

    