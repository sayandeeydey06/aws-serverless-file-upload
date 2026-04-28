import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({ region: "ap-south-1" });

export const handler = async () => {
  const bucketName = "sayan-secure-upload-project";
  const fileName = `uploads/${Date.now()}.png`;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName
  });

  const uploadURL = await getSignedUrl(s3, command, { expiresIn: 60 });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      uploadURL,
      fileName
    })
  };
};