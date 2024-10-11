import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";
import {  useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import SquareIcon from "@mui/icons-material/Square";
import "./calendar-style.scss";

export function MyCalendar(): JSX.Element {
  
  // let schedules = [];
  // let reminders = [];
  // date time filters
  const todayDate = dayjs().format("YYYY-MM-DD");
  // const todayTime: string|undefined = dayjs().format("HH:mm:ss");
  const [dateFilter, setDateFilter] = useState<any>({
    date: todayDate,
    time: undefined,
  });
  // const [isFilterEnabled, setIsFilterEnabled] = useState(false);
  const calendarRef = useRef<any>(null);
  // reminder modal data
  // const [reminderModalIsOpen, setReminderModalIsOpen] =
  //   useState<boolean>(false);
console.log(setDateFilter)
  calendarRef.current?.getApi()?.gotoDate(dateFilter.date);
  const events = [{ title: "Course Name", start: new Date() }];

  // Function to handle navigation to the next month

  function getBackground(identifier: string | undefined): string {
    switch (identifier) {
      case "reminder":
        return "#ea5454";
      case "demo":
        return "#7a5af8";
      default:
        return "#3269D3";
    }
  }
 
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (calendarRef.current) {
      setTitle(calendarRef.current.getApi().view.title);
    }
  }, []);

  const handlePrev = () => {
    calendarRef.current.getApi().prev();
    setTitle(calendarRef.current.getApi().view.title);
  };

  const handleNext = () => {
    calendarRef.current.getApi().next();
    setTitle(calendarRef.current.getApi().view.title);
  };

  const eff = calendarRef.current?.getApi();
console.log(eff)
  

  return (
    <>
      <Grid
        container
        textAlign="center"
        position="relative"
        height="100vh"
        width="100%"
        boxShadow={1}
        p={4}
        sx={{
          "& ::-webkit-scrollbar": {
            width: "3px",
            backgroundColor: " #f5f5f5",
            borderRadius: "10px",
            height: "4px",
            cursor: "pointer",
          },

          "& ::-webkit-scrollbar-thumb": {
            backgroundColor: "#7a5af8",
            borderRadius: "10px",
            cursor: "pointer",
          },
        }}
      >
        <Stack flexDirection="row" alignItems={"center"} >
        
          <IconButton onClick={handlePrev}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Typography variant="h5" fontWeight={600} color="#374557">
            {title}
          </Typography>
          <IconButton onClick={handleNext}>
            <KeyboardArrowRightIcon />
          </IconButton>
          
        
      </Stack>

        <FullCalendar
          dayMaxEvents={2}
          ref={calendarRef}
          dayHeaderContent={(data: any) => (
            <Box p={1}>{dayjs(data?.date).format("dddd")}</Box>
          )}
          eventContent={(e) => (
            <Box
              p="2px 10px"
              width="200px"
              height="fit-content"
              display="flex"
              gap={1}
              overflow="hidden"
              alignItems="center"
              borderRadius={1}
              bgcolor={"white"}
              flexDirection={"column"}
              borderLeft={"10px solid"}
              borderColor={() => getBackground(e.event.classNames[0])}

              // bgcolor={() => getBackground(e.event.classNames[0])}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {e.event.title}
              </Typography>
              <Typography variant="caption" fontWeight={400}>
                {dayjs(e.event.start).format("hh:mm A")}
              </Typography>
            </Box>
          )}
          headerToolbar={false}
          titleFormat={{ year: "numeric", month: "long" }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventTimeFormat={{
            hour: "numeric",
            meridiem: true,
          }}
        />
      </Grid>

      {/* {reminderModalIsOpen && (
        <ReminderModal
          open={reminderModalIsOpen}
          onClose={setReminderModalIsOpen}
          reminderData={postReminderHandler}
          postingStatus={postingStatus}
        />
      )} */}
    </>
  );
}

// function ReminderModal(props: IREMINDERMODALPROPS): JSX.Element {
//   const { open, onClose, reminderData, postingStatus } = props;
//   const [reminder, setReminder] = useState<IREMINDER>({
//     label: "",
//     dateAndTime: dayjs(),
//     error: undefined,
//   });
//   function onModalClose(): void {
//     onClose(false);
//     setReminder({
//       label: "",
//       dateAndTime: dayjs(),
//       error: undefined,
//     });
//   }
//   return (
//     <CustomModal
//       isOpen={open}
//       onClose={onModalClose}
//       headerLabel="Reminder"
//       closeButtonProps={{
//         onClick: () => {
//           onModalClose();
//         },
//       }}
//       rootSx={{ minWidth: 400, maxWidth: 700 }}
//     >
//       <Grid container gap={3}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="label"
//             type="text"
//             error={Boolean(reminder.error)}
//             placeholder="Label"
//             value={reminder.label}
//             onChange={(e) => {
//               setReminder((prev) => ({
//                 ...prev,
//                 label: e.target.value,
//                 error: e.target.value.trim() === "" ? "Required" : undefined,
//               }));
//             }}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DateTimePicker
//               label="Date & Time"
//               disablePast
//               value={reminder.dateAndTime}
//               onChange={(e) => {
//                 setReminder((prev) => ({ ...prev, dateAndTime: e }));
//               }}
//               slotProps={{
//                 textField: { fullWidth: true, name: "dateTime" },
//               }}
//             />
//           </LocalizationProvider>
//         </Grid>
//         <Grid container justifyContent="flex-end" gap={2}>
//           <Button size="small" onClick={onModalClose} variant="outlined">
//             Cancel
//           </Button>
//           <LoadingButton
//             loading={postingStatus?.isLoading}
//             size="small"
//             variant="contained"
//             color={postingStatus?.isError ? "error" : "primary"}
//             onClick={() => {
//               setReminder((prev) => ({
//                 ...prev,
//                 error: prev.label.trim() === "" ? "Required" : undefined,
//               }));
//               reminder.label.trim() !== "" && reminderData(reminder);
//               setReminder({
//                 label: "",
//                 dateAndTime: dayjs(),
//                 error: undefined,
//               });
//             }}
//           >
//             {postingStatus?.isError ? "Try Again" : "Submit"}
//           </LoadingButton>
//         </Grid>
//       </Grid>
//     </CustomModal>
//   );
// }
// function CalendarLegends(): JSX.Element {
//   return (
//     <Grid item xs={12} gap={4} mt={3} container>
//       <Grid display="flex" alignItems="center" gap={1}>
//         <SquareIcon sx={{ color: "#A5AFEE", fontSize: "15px" }} />
//         Demo{" "}
//       </Grid>
//       <Grid display="flex" alignItems="center" gap={1}>
//         <SquareIcon sx={{ color: "#EA5454", fontSize: "15px" }} />
//         Reminder
//       </Grid>
//     </Grid>
//   );
// }
