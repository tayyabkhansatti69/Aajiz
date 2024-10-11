
import { CustomTabs } from "@/src/components";
import { FormProvider, RHFAutocompleteSync, RHFDatePicker, RHFTextField, RHFTimePicker } from "@/src/components/rhf";
import { yupResolver } from "@hookform/resolvers/yup";
import {

    Box,
    Button,
    Grid2,

    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import { RHFUploadSingleFileWithPreview } from "@/src/components/rhf/rhf-upload";
import ArticleIcon from '@mui/icons-material/Article';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function CoursesPlan() {

    const FormSchema = Yup.object().shape({
        individualPlan: Yup.array().of(
            Yup.object().shape({

                courseName: Yup.string().required('Course Name is required'),
                courseHourse: Yup.object()?.nullable().required('Course Hours are required'),
                planPerHours: Yup.string().required('Session Time is required'),
                sessionTime: Yup.object()?.nullable().required('Plan per Hour is required'),
                noOfSession: Yup.string().required('Number of Sessions are required'),
                description: Yup.string().required('Description is required'),
                file: Yup.string(),
            })
        ),
    });

    // Initialize the form with validation schema
    const methods = useForm<any>({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            individualPlan: [{
                courseName: '',
                courseHourse: null,
                sessionTime: null,
                planPerHours: '',
                noOfSession: '',
                description: '',
                file: '',
            }],
        },
    });

    const { handleSubmit, control } = methods;

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'individualPlan', // The name should match the field array in the form
    });

    const onSubmit = (data: any) => {
        console.log('Form Data: ', data);
    };

    const FormSchema2 = Yup.object().shape({
        groupPlan: Yup.array().of(
            Yup.object().shape({
                day:Yup.string(),
                time:Yup.string(),
                courseName: Yup.string().required('Course Name is required'),
                courseHourse: Yup.object()?.nullable().required('Course Hours are required'),
                planPerHours: Yup.string().required('Session Time is required'),
                sessionTime: Yup.object()?.nullable().required('Plan per Hour is required'),
                noOfSession: Yup.string().required('Number of Sessions are required'),
                description: Yup.string().required('Description is required'),
                file: Yup.string(),
            })
        ),
    });

    // Initialize the form with validation schema
    const methods2 = useForm<any>({
        resolver: yupResolver(FormSchema2),
        defaultValues: {
            groupPlan: [{
                date:'',
                time:'',
                courseName: '',
                courseHourse: null,
                sessionTime: null,
                planPerHours: '',
                noOfSession: '',
                description: '',
                file: '',
            }],
        },
    });

    const { handleSubmit:handleSubmit2, control:control2 } = methods2;

    const { fields:fields2, append:append2, remove:remove2 } = useFieldArray({
        control:control2,
        name: 'groupPlan', // The name should match the field array in the form
    });

    const onSubmit2 = (data: any) => {
        console.log('Form Data: ', data);
    };
    return (
        <Stack px={2} pt={7} >

            <Paper variant="elevation" elevation={2}>
                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} p={1} >
                    <Typography variant="h5" fontWeight={700}>
                        Courses Plan
                    </Typography>
                </Box>
                <Box px={1} >
                    <Typography variant="caption" fontWeight={600}>
                        Courses Type
                    </Typography>
                </Box>
                <CustomTabs tabsNameArray={["Individual courses", "Group courses"]}>


                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

                        {fields.map((item, index) => (
                            <Grid2 container key={item.id} spacing={2} px={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <RHFTextField
                                        name={`individualPlan[${index}].courseName`}
                                        size="small"
                                        label="Course Name"
                                        fullWidth
                                        placeholder="Enter Course Name"
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <RHFAutocompleteSync
                                        name={`individualPlan[${index}].courseHourse`}
                                        placeholder="Choose Type"
                                        size="small"
                                        options={[
                                            { id: 1, name: 'Hard', value: 'hard' },
                                            { id: 2, name: 'Easy', value: 'easy' },
                                            { id: 3, name: 'Intermediate', value: 'intermediate' },
                                            { id: 4, name: 'True False', value: 'trueFalse' },
                                        ]}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <RHFTextField
                                        name={`individualPlan[${index}].planPerHours`}
                                        size="small"
                                        label="Session Time"
                                        fullWidth
                                        placeholder="Enter Session Time"
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <RHFAutocompleteSync
                                        name={`individualPlan[${index}].sessionTime`}
                                        placeholder="Choose Plan"
                                        size="small"
                                        options={[
                                            { id: 1, name: 'Hourly', value: 'hourly' },
                                            { id: 2, name: 'Weekly', value: 'weekly' },
                                            { id: 3, name: 'Monthly', value: 'monthly' },
                                        ]}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <RHFTextField
                                        name={`individualPlan[${index}].noOfSession`}
                                        fullWidth
                                        size="small"
                                        label="Number of Sessions"
                                        placeholder="Enter Number of Sessions"
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 12 }}>
                                    <RHFTextField
                                        name={`individualPlan[${index}].description`}
                                        fullWidth
                                        size="small"
                                        label="Description"
                                        placeholder="Enter Description"
                                        multiline
                                        rows={2}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 0, md: 2 }} />
                                <Grid2 size={{ xs: 12, md: 8 }} alignItems={'center'}>
                                    <RHFUploadSingleFileWithPreview name={`individualPlan[${index}].file`} fullWidth
                                        label="Upload your Video of leactur here " />
                                </Grid2>
                                <Grid2 size={{ xs: 0, md: 2 }} />
                                <Grid2 size={{ xs: 12, md: 12 }}>
                                    <Typography variant="body2" fontWeight={700}>
                                        Total Price{" "}
                                        <span style={{ background: "#03b2cb", borderRadius: "2px", color: "#242459" }}>
                                            300$
                                        </span>
                                    </Typography>

                                </Grid2>
                                {fields.length > 1 && (
                                    <Grid2 size={{ xs: 12 }} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ mt: 1, mb: 1 }}>
                                        <Button
                                            variant="contained"
                                            sx={{ background: "#EF4444", color: '#FFF' }}
                                            startIcon={<HighlightOffIcon sx={{ color: 'white', }} />}
                                            onClick={() => remove(index)}
                                        >
                                            Remove Plan
                                        </Button>
                                    </Grid2>
                                )}
                            </Grid2>
                        ))}
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'flex-end'} gap={1} px={1}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddIcon sx={{ color: 'white', }} />}
                                onClick={() =>
                                    append({
                                        courseName: '',
                                        courseHourse: null,
                                        sessionTime: null,
                                        planPerHours: '',
                                        noOfSession: '',
                                        description: '',
                                    })
                                }
                            >
                                Add Plan
                            </Button>

                            {/* Submit Button */}
                            <Button type="submit" startIcon={<ArticleIcon sx={{ color: 'white', }} />} variant="contained" sx={{ background: "#242459", color: '#fff' }}>
                                Submit
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ background: "#EF4444", color: '#FFF' }}
                                startIcon={<HighlightOffIcon sx={{ color: 'white', }} />}

                            >
                                cancel
                            </Button>

                        </Box>
                    </FormProvider>



                    <Box>
                        <FormProvider methods={methods2} onSubmit={handleSubmit2(onSubmit2)}>

                            {fields2.map((item, index) => (
                                <Grid2 container key={item.id} spacing={2} px={2}>
                                    <Grid2 size={{ xs: 12, md: 12 }}>
                                    <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'flex-start'} gap={1}>
                                    <Grid2 size={{ xs: 12, md: 3 }}>
                                        <RHFDatePicker
                                            name={`groupPlan[${index}].date`}
                                            size="small"
                                            label="Date"
                                            fullWidth
                                            placeholder="Enter Date"
                                        />
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, md: 3 }}>
                                        <RHFTimePicker
                                            name={`groupPlan[${index}].time`}
                                            size="small"
                                            label="Time"
                                            fullWidth
                                            placeholder="Enter Time"
                                        />
                                        </Grid2>

                                    </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 6 }}>
                                        <RHFTextField
                                            name={`groupPlan[${index}].courseName`}
                                            size="small"
                                            label="Course Name"
                                            fullWidth
                                            placeholder="Enter Course Name"
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 6 }}>
                                        <RHFAutocompleteSync
                                            name={`groupPlan[${index}].courseHourse`}
                                            placeholder="Choose Type"
                                            size="small"
                                            options={[
                                                { id: 1, name: 'Hard', value: 'hard' },
                                                { id: 2, name: 'Easy', value: 'easy' },
                                                { id: 3, name: 'Intermediate', value: 'intermediate' },
                                                { id: 4, name: 'True False', value: 'trueFalse' },
                                            ]}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 6 }}>
                                        <RHFTextField
                                            name={`groupPlan[${index}].planPerHours`}
                                            size="small"
                                            label="Session Time"
                                            fullWidth
                                            placeholder="Enter Session Time"
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 6 }}>
                                        <RHFAutocompleteSync
                                            name={`groupPlan[${index}].sessionTime`}
                                            placeholder="Choose Plan"
                                            size="small"
                                            options={[
                                                { id: 1, name: 'Hourly', value: 'hourly' },
                                                { id: 2, name: 'Weekly', value: 'weekly' },
                                                { id: 3, name: 'Monthly', value: 'monthly' },
                                            ]}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 6 }}>
                                        <RHFTextField
                                            name={`groupPlan[${index}].noOfSession`}
                                            fullWidth
                                            size="small"
                                            label="Number of Sessions"
                                            placeholder="Enter Number of Sessions"
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 12 }}>
                                        <RHFTextField
                                            name={`groupPlan[${index}].description`}
                                            fullWidth
                                            size="small"
                                            label="Description"
                                            placeholder="Enter Description"
                                            multiline
                                            rows={2}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 0, md: 2 }} />
                                    <Grid2 size={{ xs: 12, md: 8 }} alignItems={'center'}>
                                        <RHFUploadSingleFileWithPreview name={`groupPlan[${index}].file`} fullWidth
                                            label="Upload your Video of leactur here " />
                                    </Grid2>
                                    <Grid2 size={{ xs: 0, md: 2 }} />
                                    <Grid2 size={{ xs: 12, md: 12 }}>
                                        <Typography variant="body2" fontWeight={700}>
                                            Total Price{" "}
                                            <span style={{ background: "#03b2cb", borderRadius: "2px", color: "#242459" }}>
                                                300$
                                            </span>
                                        </Typography>

                                    </Grid2>
                                    {fields2.length > 1 && (
                                        <Grid2 size={{ xs: 12 }} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ mt: 1, mb: 1 }}>
                                            <Button
                                                variant="contained"
                                                sx={{ background: "#EF4444", color: '#FFF' }}
                                                startIcon={<HighlightOffIcon sx={{ color: 'white', }} />}
                                                onClick={() => remove2(index)}
                                            >
                                                Remove Plan
                                            </Button>
                                        </Grid2>
                                    )}
                                </Grid2>
                            ))}
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'flex-end'} gap={1} px={1}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AddIcon sx={{ color: 'white', }} />}
                                    onClick={() =>
                                        append2({
                                            date:'',
                                            time:'',
                                            courseName: '',
                                            courseHourse: null,
                                            sessionTime: null,
                                            planPerHours: '',
                                            noOfSession: '',
                                            description: '',
                                        })
                                    }
                                >
                                    Add Plan
                                </Button>

                                {/* Submit Button */}
                                <Button type="submit" startIcon={<ArticleIcon sx={{ color: 'white', }} />} variant="contained" sx={{ background: "#242459", color: '#fff' }}>
                                    Submit
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{ background: "#EF4444", color: '#FFF' }}
                                    startIcon={<HighlightOffIcon sx={{ color: 'white', }} />}

                                >
                                    cancel
                                </Button>

                            </Box>
                        </FormProvider>
                    </Box>
                </CustomTabs>

            </Paper>
        </Stack>
    );
}

export default CoursesPlan;
