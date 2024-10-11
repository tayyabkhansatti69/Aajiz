import IconQuestions from "@/src/assets/icons/dashboard-main/icon-question"
import { FormProvider, RHFAutocompleteSync, } from "@/src/components/rhf"
import { Box, Button, Checkbox, FormControlLabel, Grid2, Paper, Radio, RadioGroup, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useEffect, useState } from "react";
// import CustomModal from "@/src/components/custom-model";
import { AlertModals } from "@/src/components/AlertModel";
import ChooseCorrectAnswer from "./chooseCorrectAnswer";


function QuestionBankSection() {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [openChooseAnswer, setOpenChooseAnswer] = useState(false)
    const [questionTypeEnter,setQuestionTypeEnter]=useState<any[]>([])
    const quizData = {
        questions: [
            {
                id: 1,
                type: 'multipleChoices',
                question: 'She is 28 year old',
                options: ['To be', 'To have food', 'To be living'],
            },
            {
                id: 6,
                type: 'multipleChoices',
                question: 'She is 28 year old',
                options: ['To be', 'To have food', 'To be living'],
            },
            {
                id: 7,
                type: 'multipleChoices',
                question: 'She is 28 year old',
                options: ['To be', 'To have food', 'To be living'],
            },
            {
                id: 2,
                type: 'choosetheCorrectAnswer',
                question: 'She is 28 year old',
                options: ['To live', 'To have food', 'To be living'],
            },
            {
                id: 10,
                type: 'choosetheCorrectAnswer',
                question: 'She is 28 year old',
                options: ['To live', 'To have food', 'To be living'],
            },
            {
                id: 11,
                type: 'choosetheCorrectAnswer',
                question: 'She is 28 year old',
                options: ['To live', 'To have food', 'To be living'],
            },
            {
                id: 3,
                type: 'trueFalse',
                question: 'She is 28 year old',
                answer: true,
            },
            {
                id: 8,
                type: 'trueFalse',
                question: 'She is 28 year old',
                answer: true,
            },
            {
                id: 9,
                type: 'trueFalse',
                question: 'She is 28 year old',
                answer: true,
            },
            {
                id: 4,
                type: 'drag-and-drop',
                question: 'Arrange the letters in order',
                items: ['S', 'H', 'E', 'I', 'S'],
            },
            {
                id: 5,
                type: 'matchingAnswers',
                question: 'Match the items',
                pairs: [
                    { left: 'Foot', right: 'Leg' },
                    { left: 'Hand', right: 'Arm' },
                ],
            },
        ],
    };

    const [selectedAnswers, setSelectedAnswers] = useState({});

    // Handle radio change
    const handleRadioChange = (event, idx) => {
        const { value } = event.target;
        // Update the selected answer for this specific question index
        setSelectedAnswers((prev) => ({
            ...prev,
            [idx]: value,
        }));
    };



    const FormSchema = Yup.object().shape({
        questions: Yup?.object()?.nullable()
    });
    const methods = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            questions: { id: 1, name: "Multiple choices", value: "multipleChoices" },
        },

    });
    const { handleSubmit, watch } = methods;
    const questionType: any = watch('questions')

    const onSubmit = () => { };
    const dataOfQuestion = quizData?.questions?.filter((item) => item?.type === questionType?.value);
    console.log(selectedAnswers)

    const handleClickAdd=()=>{

        setOpenChooseAnswer(true)
    }


    useEffect(() => {
        if (Array.isArray(questionType)) {
          setQuestionTypeEnter(questionType);
        } else if (typeof questionType === 'object' && questionType !== null) {
          setQuestionTypeEnter([questionType]); // Wrap the object in an array
        } else {
          setQuestionTypeEnter([]); // Handle null or undefined cases
        }
      }, [questionType]);

    return (
        <>
            <Grid2 container spacing={2} p={3} pt={7} >

                <Grid2 size={{ xs: 12 }}>


                    <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} padding={'16px'} sx={{ background: '#16A2C4', borderRadius: '16px 16px 0px 0px', }} gap={2}>
                        <IconQuestions />
                        <Typography variant="body1" color='#FFFFFF'>
                            Question Bank
                        </Typography>

                    </Box>
                    <Paper variant="elevation" elevation={2} sx={{ backgroundColor: "#f9f9f9", }}>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} padding={'16px'}>
                            <Typography variant="h6" fontWeight={500} color='#1C485D'>
                                Select Question Type
                            </Typography>

                        </Box>

                        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                            <Grid2 container spacing={2} padding={'16px'}>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <RHFAutocompleteSync
                                        name="questions"
                                        outerLabel="select Type"
                                        placeholder="Sync autocomplete"
                                        options={[
                                            { id: 1, name: "Multiple choices", value: "multipleChoices" },
                                            { id: 2, name: "choose the correct answer", value: "choosetheCorrectAnswer" },
                                            { id: 3, name: "Matching answers", value: "matchingAnswers" },
                                            { id: 4, name: "true False", value: "trueFalse" }
                                        ]}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 2 }} />
                                <Grid2 size={{ xs: 12, md: 6 }} mt={3}>
                                    <Box display={'flex'} justifyContent={'flex-end'} flexDirection={'row'} alignItems={'center'} gap={2}>
                                        <Button variant="contained" sx={{ background: "#9CA3AF" }} startIcon={<AddIcon sx={{ color: 'white', background: "#9CA3AF" }} />}onClick={handleClickAdd}>
                                            Add A Question
                                        </Button>
                                        <Button variant="contained" size="small" sx={{ background: "#9CA3AF" }} startIcon={<EditIcon sx={{ color: 'white', }} />}>
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{ background: "#C65468" }}
                                            startIcon={<CancelOutlinedIcon sx={{ color: 'white', }} />}
                                            onClick={() => { setIsDeleteOpen(true) }}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </Grid2>
                            </Grid2>
                        </FormProvider>
                        <Grid2 container spacing={0} pb={2}>
                            {dataOfQuestion?.map((item, index) => (
                                <Grid2 key={index} size={{ xs: 12 }}>
                                    {item?.type === "multipleChoices" && (
                                        <>
                                            {index === 0 && (
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: "#f9f9f9",
                                                    }}
                                                >

                                                    <Typography variant="h6">Multiple Choice Answer</Typography>

                                                </Box>
                                            )}
                                            <Box
                                                px={2}
                                            >
                                                <Box
                                                    display="flex"
                                                    flexDirection="row"
                                                    justifyContent="flex-start"
                                                    alignItems="center"
                                                    gap={2}
                                                >
                                                    <Checkbox />
                                                    <Typography variant="body1" fontWeight={700}>{item.question}</Typography>
                                                </Box>

                                                {item?.options?.map((option, optionIndex) => (
                                                    <Grid2 key={optionIndex} size={{ xs: 12 }}>
                                                        <Box
                                                            display="flex"
                                                            flexDirection="row"
                                                            justifyContent="flex-start"
                                                            alignItems="center"
                                                            gap={2}
                                                            px={2}
                                                        >
                                                            <Checkbox />
                                                            <Typography variant="body2">{option}</Typography>
                                                        </Box>
                                                    </Grid2>
                                                ))}
                                            </Box>
                                        </>
                                    )}
                                    {
                                        item?.type === "trueFalse" && (
                                            <>
                                                {index === 0 && (
                                                    <Box
                                                        sx={{
                                                            p: 2,
                                                            backgroundColor: "#f9f9f9",
                                                        }}
                                                    >
                                                        <Typography variant="h6">True False</Typography>
                                                    </Box>
                                                )}
                                                <Box px={1}>
                                                    <Box
                                                        display="flex"
                                                        flexDirection="row"
                                                        justifyContent="flex-start"
                                                        alignItems="center"
                                                        gap={2}
                                                        mt={1}
                                                        mb={1}
                                                    >
                                                        <Checkbox />
                                                        <Typography variant="body1" fontWeight={700}>
                                                            {item.question}
                                                        </Typography>
                                                    </Box>

                                                    <Grid2 size={{ xs: 12 }}>
                                                        <Box
                                                            display="flex"
                                                            flexDirection="column"
                                                            justifyContent="flex-start"
                                                            alignItems="flex-start"
                                                            gap={4}
                                                            px={4}
                                                            width="100%"
                                                        >
                                                            <RadioGroup
                                                                name={`radioTest-${index}`} // Ensuring unique name for each question
                                                                onChange={handleRadioChange}
                                                                style={{ width: '100%', gap: '2rem' }}

                                                            >
                                                                <Box border="1px solid #ACEAF5"
                                                                    borderRadius="16px" p={1} display={'flex'} width="100%">
                                                                    <FormControlLabel value="true" control={<Radio />} label="True" />
                                                                </Box>

                                                                <Box border="1px solid #ACEAF5"
                                                                    borderRadius="16px" p={1} display={'flex'} width="100%">
                                                                    <FormControlLabel value="false" control={<Radio />} label="False" />
                                                                </Box>
                                                            </RadioGroup>
                                                        </Box>
                                                    </Grid2>

                                                </Box>
                                            </>
                                        )
                                    }
                                    {item?.type === "choosetheCorrectAnswer" && (
                                        <>
                                            {index === 0 && (
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: "#f9f9f9",
                                                    }}
                                                >

                                                    <Typography variant="h6">Choose the Correct Answer</Typography>

                                                </Box>
                                            )}
                                            <Box
                                                px={2}
                                            >
                                                <Box
                                                    display="flex"
                                                    flexDirection="row"
                                                    justifyContent="flex-start"
                                                    alignItems="center"
                                                    gap={2}
                                                    mb={1}
                                                >
                                                    <Checkbox />
                                                    <Typography variant="body1" fontWeight={700}>{item.question}</Typography>
                                                </Box>

                                                {item?.options?.map((option, optionIndex) => (
                                                    <Grid2 key={optionIndex} size={{ xs: 12 }} display="flex" alignItems="center">
                                                        {/* Render letter (A, B, C, D, ...) outside the box */}
                                                        <Typography variant="body2" sx={{ marginRight: 2, ml: 2 }}>
                                                            {String.fromCharCode(65 + optionIndex)} {/* Converts 0 -> A, 1 -> B, etc. */}
                                                        </Typography>
                                                        <Box
                                                            display="flex"
                                                            flexDirection="row"
                                                            justifyContent="flex-start"
                                                            alignItems="center"

                                                            borderRadius={'8px'}
                                                            border='1px solid #ACEAF5'
                                                            gap={4}
                                                            p={2}
                                                            mb={1}
                                                            width="100%"
                                                        >
                                                            <Typography variant="body2">{option}</Typography>
                                                        </Box>
                                                    </Grid2>
                                                ))}

                                            </Box>
                                        </>
                                    )}
                                </Grid2>
                            ))}
                        </Grid2>



                    </Paper>
                </Grid2>


            </Grid2>

            {
                <AlertModals
                    type='Do you want to delete'
                    open={isDeleteOpen}
                    handleClose={() => {
                        setIsDeleteOpen(false);
                    }}
                    handleSubmitBtn={() => { }}
                    message='Are you sure you want to delete this Question?'
                />
            }
            {

                openChooseAnswer && (
                    <ChooseCorrectAnswer openChooseAnswer={openChooseAnswer} setOpenChooseAnswer={setOpenChooseAnswer} questionTypeEnter={questionTypeEnter} />
                )}
        </>

    )
}
export default QuestionBankSection