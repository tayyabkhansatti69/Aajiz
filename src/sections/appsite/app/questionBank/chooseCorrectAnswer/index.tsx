import ClearIcon from '@mui/icons-material/Clear';
import { CustomModal } from "@/src/components";
import { FormProvider, RHFAutocompleteSync, RHFCheckbox, RHFTextField } from "@/src/components/rhf";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid2, IconButton, } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import * as Yup from 'yup';

// Define the TypeScript interface for the form fields
interface FormValues {
    question: string;
    description: string;
    options: string[];
}

function ChooseCorrectAnswer(props: any) {
    const { openChooseAnswer, setOpenChooseAnswer, questionTypeEnter } = props;

    const FormSchema = Yup.object().shape({
        question: Yup.string().required('Question is required'),
        description: Yup.string().required('Description is required'),
        options: Yup.array().of(
            Yup.object().shape({
                option: Yup.string().required("option is required").min(2, 'At least 2 options are required').max(8, 'At least 2 options are required'),
            })
        ),
    });

    // Initialize the form with validation schema
    const methods = useForm<any>({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            question: '',
            description: '',
            options: [{ option: "" }], // Do not set initial options here
        },
    });

    const { handleSubmit, control } = methods;

    const { fields, append, remove } = useFieldArray({
        control,
        name: "options",  // Specify the field array name as part of the defined interface
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form Data: ", data);
    };

    return (
        <CustomModal
            isOpen={openChooseAnswer}
            onClose={() => setOpenChooseAnswer(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            headerLabel={questionTypeEnter?.[0]?.name}
            headerTypographyProps={{ color: '#FFFFFF' }}
            closeButtonProps={{ onClick: () => setOpenChooseAnswer(false) }}
            headerMic={true}

            headerMicProps={{}}
            headerAttachment={true}
            headerAttachmentProps={{}}
            headerDuplicate={true}
            headerDuplicateProps={{}}
            headerDelete={true}
            headerDeleteProps={{}}
            headerIconProp={true}
            rootSx={{
                maxWidth: { md: 800, xs: 550, sm: 650 },
                height: "90%",
                overflow: "scroll",
                "::-webkit-scrollbar": {
                    width: "0px",
                },
            }}
        >

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid2 container spacing={2} padding={'16px'}>
                <Grid2 size={{ xs: 12, md: 6 }}></Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <RHFAutocompleteSync
                                name="type"
                                placeholder="Choose Type"
                                size="small"
                                options={[
                                    { id: 1, name: "Hard", value: "hard" },
                                    { id: 2, name: "Easy", value: "easy" },
                                    { id: 3, name: "Intermediate", value: "intermediate" },
                                    { id: 4, name: "true False", value: "trueFalse" }
                                ]}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12,md:2, }} >
                            <RHFTextField name='marks' size="small" label='Marks' fullWidth placeholder='0' />
                        </Grid2>
                    
                    <Grid2 size={{ xs: 12 }}>
                        <RHFTextField name="question" fullWidth label="Question" placeholder="Enter The Question" />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <RHFTextField name="description" fullWidth label="Description" placeholder="Enter The Description" multiline rows={3} />
                    </Grid2>
                    {/* <Grid2 size={{ xs: 12 }} rowSpacing={2}> */}
                    {fields.map((item, index) => (
                        <Box key={item?.id} display="flex" alignItems="center" width={'100%'} mt={1} mb={1}>
                            <Box width={'80%'}>
                                <RHFTextField
                                    name={`options.${index}.option`}
                                    label={`Option ${String.fromCharCode(65 + index)}`}
                                    fullWidth
                                    size="small"
                                    placeholder={`Enter option ${String.fromCharCode(65 + index)}`}
                                    sx={{ flex: 1 }}

                                />
                            </Box>
                            {fields.length > 1 && (
                                <Box display="flex" alignItems="center" ml={2}>
                                    <RHFCheckbox name={`selectedOption.${index}`} sx={{ ml: 1 }} />
                                    <IconButton type="button" onClick={() => remove(index)}>
                                        <ClearIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </Box>


                    ))}
                    {/* </Grid2> */}


                    <Grid2 size={{ xs: 12 }} display="flex" justifyContent="flex-start">
                        <Button
                            type="button"
                            size='small'
                            variant="outlined"
                            onClick={() => append('')}
                        >
                            + Add Option
                        </Button>
                    </Grid2>

                    <Grid2 size={{ xs: 12 }}>
                        <Box display="flex" justifyContent="center" gap={2}>
                            <Button variant="contained" fullWidth type="submit">
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ background: '#C65468' }}
                                onClick={() => setOpenChooseAnswer(false)}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </FormProvider>
        </CustomModal>
    );
}

export default ChooseCorrectAnswer;
