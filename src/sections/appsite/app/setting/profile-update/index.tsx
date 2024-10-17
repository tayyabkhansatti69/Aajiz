import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system"; // Added styled import
import { ChangeEvent, useState } from "react";
import profileImg from '../../../../../assets/image/profile.png';


const ImgStyled = styled('img')(({ theme }) => ({
    width: '127px',
    height: '127px',
    marginRight: theme.spacing(6.25),
    borderRadius: '92px',
}));

function ProfileUpdate() {


    const [imgSrc, setImgSrc] = useState<string>(profileImg?.src);
    const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const { files } = event.target;

        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result as string);
            reader.readAsDataURL(files[0]);

            // Commented out the image upload logic for future use.
            /*
            const formData = new FormData();
            formData.append('file', files[0]);
      
            try {
              const accessToken = localStorage.getItem('accessToken');
      
              if (!accessToken) {
                console.log('Access token is missing');
                setError('Access token is missing');
                setLoading(false);
                return;
              }
      
              const response = await fetch(`${process.env.NEXT_PUBLIC_AAC_APP_BASE_URL}profile_image`, {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
                body: formData,
              });
      
              const responseData = await response.json();
              console.log('Image uploaded successfully:', responseData);
      
            } catch (error) {
              console.error('Error uploading image:', error);
            }
            */
        }
    };

    return (
        <Box sx={{ background: 'white' }}>
            <Box sx={{ width: '100%', height: '100%', borderRadius: '92px', }} p={2} border={`2px solid #FFFF`}>
                <label htmlFor='account-settings-upload-image'>
                    <ImgStyled src={imgSrc} alt='Profile Pic' />

                </label>
                <input
                    hidden
                    type='file'
                    aria-label="Change Photo "
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                />
            </Box>

            <Box px={2} onClick={() => {
                const fileInput = document.getElementById('account-settings-upload-image');
                if (fileInput) {
                    (fileInput as HTMLInputElement).click(); // Ensure TypeScript understands it's an input element
                }
            }} sx={{ cursor: 'pointer' }}>
                <Typography
                    variant='body2'
                    color='secondary'

                >
                    Change Photo
                </Typography>
            </Box>
        </Box>
    );
}

export default ProfileUpdate;
