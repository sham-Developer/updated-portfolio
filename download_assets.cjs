const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  'hero_sculpture.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5lGf2dQFPXAAMUc3_LfMvL_tr0aJPPvO1_8QwXTO8dgF3hHfkTE6b_Yadl8N9TapTglyiWISLn1aA6qheJHJtOGXZfzuTSrn0wqwNTMUCrD5UPG2KMHk60wvGs7bpVqJ7-4XI-GptSWMWXd2g6RepcqtJ5NUInIX8fTWlTe4fbEyVaoYdqTwqd-02uOLu3V-IhoIRGInZhibzmk2LV_R8bylwdA0vOaVstYMS9S4HNnOw6YdnyFyxzA',
  'mockup_3d.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD70t0fUUDQeZhGTxswdXvyXovqASqnE532hGNeAO4-knKyHuQJi_X1oZw05IUa9svx2z_Xk4lmfedDLbfbVlnSkNpbDrG2zzvrRELPtHdQTuAuyfXZIjMNJZsQ4zxGkM-XPlBe4jQ1qAWy7HcOATZGDpAxM9HlG-eph_SyUTfkRDbkklGrNtDOvYHpxUdxiETBqC9Qj526yWnsIbNT-TX_UdZB46DL94_qGdudawvTyTcrIjISt5oXBw',
  'crm_system.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCErRDOVcj1ON34UX9FTrWBMc3S7eghBNSXhKfkX_vRTst4h9JqecLXvI9ce2t4H0Ql-7lZGYTPPuaFT5ZphRCo7WH9uQQwG9hye3WmoGrdP1HVUSNTGlFnW69DbIGCHYYic29vlbzZBOuBZIC1uzz8_iCRtXkGwrbsJJmoHK-HP6_BvjokqihEj3qzm0WiITQsLAvpu1b8XJh_p3o-dgFU-RDQCs3w5pxuZvdwroznVkNCY4L9PmSXWQ',
  'alloy_inspection.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZKZehr-Q_C0w8uF5pOVUMNKWE3Oo0LFmiBoEUSMy_OsGBH9NOQtAKD2FbeQhj7ta71j5HpS-tujUCJsQH6iwyCd9GUUMVFxJZGMra03VFibCrV6t1DzTZ_PGS15FF2_jlKqL0nZ3D12_12NPyayhwMJH_ctbfjMFDr81zGt-xnE_CRRq0qNlzVmgn3npNazD2OL-rM6BAP8ociJtz49BRJEdddhKDOUrW9wUcxysAHdCvzLCDP7IrFg',
  'smart_irrigation.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeclNp5bKWPG9GEhWRb-Zgnfi7jD7AydnqfPvOcbGjgBRtMzJP1lY84bVVgbhWRVs5Yxt4QdxWv2hOAN7C76DN28WEAnm12M4SRPkBE7cugdI6ZT79T-kAHxI4s0SPd01Bqhqq-Kgn9qeAyPaw1CY8y9N1cZ1sfsYP-mEyx6lTR-ydeOi_YxE92yLq4wwHNcCmVN_so0tyAv1Or5TPx0WL3YDhTARyuB1Al6TrQHuArtZTkT3FIZGfoQ',
  'distribution_logistics.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKN1uTNef9fSkYAzMyvZYiFFe4oz1_6_rK_p2DMpICSMFuUCm5YPCJvvvEVUcLZsgaBUAAZLsat7a0LXtrQZwA12Cz-07aOMECyOYJ6mLDSMf4Cspq-rc3XVS22QoVKP8EdS3FZd9JCHROiSxPItVd0KlpGA7qT3GYjnW8p9WCUo4r6axdGefOhmMsPWacn0dEzx3m7sYRZqlmP6RXsm2o5IeVzpqz4No932Z2VmsuW8drGgYTnATtrg'
};

const targetDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(targetDir, filename);
    console.log(`Downloading ${filename}...`);
    await downloadFile(url, dest);
  }
  console.log('All images downloaded successfully.');
}

run();
