import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core"
import {
  Box,
  List,
  useTheme,
  Typography,
  ListItem,
  ListItemText,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../Theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentevents] = useState([]);

  const handleDateclick = (selected) => {
    const title = prompt("please enter new title to your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClik = (selected) => {
    if (
      window.confirm(
        `are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between" m="20px">
        {/* calendar sidebar */}
        <Box flex="1 1 20%" p="15px" borderRadius="5px" backgroundColor={colors.primary[400]}>
        <Typography variant="h5" m="5px">Events</Typography>
          <List >
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: " 10px 0",
                  borderRadius: "2px",
                  
                }}
              >
                <ListItemText
                
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px" >
            <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
               timeGridPlugin, 
               listPlugin,
               interactionPlugin
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            dayMaxEvents={true}
            select={handleDateclick}
            eventClick={handleEventClik}
            eventsSet={(event)=> setCurrentevents(event)}
            initialEvents={[
              {id: "184", title: "Day event", date: "2023-09-25"},
              {id: "184", title: "ceremony", date: "2023-09-25"}
            ]}
           eventBackgroundColor="#4cceac"
           
           
            />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
