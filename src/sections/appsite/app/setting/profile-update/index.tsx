import { useUpdateProfileMutation } from "@/src/services/donor/setting/setting-api";
import { Avatar, Box, Typography } from "@mui/material";
// import { styled } from "@mui/system"; // Added styled import
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import profileImg from "../../../../../assets/image/profile.png";
import { useRouter } from "next/navigation";

// const ImgStyled = styled("img")(({ theme }) => ({
//   width: "127px",
//   height: "127px",
//   marginRight: theme.spacing(6.25),
//   borderRadius: "92px",
// }));

function ProfileUpdate(profile_image) {
  const [updateProfile] = useUpdateProfileMutation();
const router=useRouter()
  const [imgSrc, setImgSrc] = useState<string>(profileImg?.src);
  useEffect(() => {
    if (profile_image) {
      setImgSrc(profile_image?.profile_image);
    }
  }, [profile_image,router]);

  console.log(imgSrc);
  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const { files } = event.target;

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string);
      reader.readAsDataURL(files[0]);

      // Commented out the image upload logic for future use.

      try {
        const formData = new FormData();
        formData.append("file", files[0]);
        const response = await updateProfile(formData).unwrap();

        toast.success(response?.message || "Profile Updated successfully!");
      } catch (error: any) {
        console.error(error);
        toast.error(error?.data?.message || "Something went wrong!");
      }
    }
  };

  return (
    <Box sx={{ background: "white" }}>
      <Box
        sx={{ width: "100%", height: "100%", borderRadius: "92px" }}
        p={2}
        border={`2px solid #FFFF`}
      >
        <Avatar
          src={imgSrc}
          alt="Profile Pic"
          sx={{ width: "10rem", height: "10rem" }}
        />

        <input
          hidden
          type="file"
          aria-label="Change Photo "
          onChange={onChange}
          accept="image/png, image/jpeg"
          id="account-settings-upload-image"
        />
      </Box>

      <Box
        px={2}
        onClick={() => {
          const fileInput = document.getElementById(
            "account-settings-upload-image"
          );
          if (fileInput) {
            (fileInput as HTMLInputElement).click(); // Ensure TypeScript understands it's an input element
          }
        }}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="body2" color="secondary">
          Change Photo
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileUpdate;
