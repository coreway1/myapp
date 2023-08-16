// import {PolarisVizProvider, SparkBarChart, SparkLineChart, BarChart, LineChart, BarChart} from '@shopify/polaris-viz';
// import '@shopify/polaris-viz/build/esm/styles.css';

// import app from "../fire-config.js";
// import { doc, setDoc, getFirestore, getDoc, deleteDoc } from 'firebase/firestore';
// import { useState, useCallback, useEffect, useRef } from 'react';

//  function Linechart({shopid}) {
//   const db = getFirestore(app);

//   const [Notifications, setNotifications] = useState([]);

//   const getanalytics = async (shopid) =>{
//     const docRef = doc(db, shopid, "Notificationsanalytics");
//     const docSnap = await getDoc(docRef);
//     var data = docSnap.data() ? docSnap.data().data : [];

//     setNotifications(data);
//   };


//   useEffect(() => {
//     if(shopid) getanalytics(shopid);
//   }, [shopid]); 


//   const dateRange = (startDate, endDate, steps = 1) => {
//     const dateArray = [];
//     let currentDate = new Date(startDate);
//     while (currentDate <= new Date(endDate)) {
//       dateArray.push(new Date(currentDate).toDateString());
//       currentDate.setUTCDate(currentDate.getUTCDate() + steps);
//     }
//     return dateArray;
//   }
  
//   const dates = dateRange('2023-08-1', new Date());
//   var notifiarray = [
//                   { value: 100, key: "Tue Aug 01 2023" },
//                   { value: 99, key: "Wed Aug 02 2023" },
//                   { value: 1000, key: "Tue Aug 15 2023" },
   
//                 ];
//   const arrayColumn = (arr, n) => arr.map(x => x[n]);
//   var comparray = arrayColumn(notifiarray, "key");
//   dates.map(function (val, index) {
//      comparray.indexOf(val) === -1 ? notifiarray.push({value: 0, key: val}) : console.log(val+"This item already exists");
//   });
  
//   notifiarray.sort(function(a, b) {
//     var keyA = new Date(a.key),
//       keyB = new Date(b.key);
//     if (keyA < keyB) return -1;
//     if (keyA > keyB) return 1;
//     return 0;
//   });
  
  
                
//                 console.log(notifiarray);


// return(

// <div style={{height: '300px'}} >
// <PolarisVizProvider>
//   <BarChart

//   theme='Light'
//  data={[
//   {
//     name: "Notifications",
//     data: [
//       { value: 100, key: "2020-04-01T12:00:00" },
//       { value: 99, key: "2020-04-02T12:00:00" },
//       { value: 1000, key: "2020-04-03T12:00:00" },
//       { value: 2, key: "2020-04-04T12:00:00" },
//       { value: 22, key: "2020-04-05T12:00:00" },
//       { value: 6, key: "2020-04-06T12:00:00" },
//       { value: 5, key: "2020-04-07T12:00:00" }
//     ]
//   },
//   {
//     name: "Notifications sent",
//     data: [
//       { value: 90, key: "2020-04-01T12:00:00" },
//       { value: 80, key: "2020-04-02T12:00:00" },
//       { value: 900, key: "2020-04-03T12:00:00" },
//       { value: 1, key: "2020-04-04T12:00:00" },
//       { value: 20, key: "2020-04-05T12:00:00" },
//       { value: 3, key: "2020-04-06T12:00:00" },
//       { value: 4, key: "2020-04-07T12:00:00" }
//     ]
//   },
//   {
//     name: "Order Value",
//     data: [
//       { value: 80, key: "2020-04-01T12:00:00" },
//       { value: 70, key: "2020-04-02T12:00:00" },
//       { value: 800, key: "2020-04-03T12:00:00" },
//       { value: 3, key: "2020-04-04T12:00:00" },
//       { value: 10, key: "2020-04-05T12:00:00" },
//       { value: 1, key: "2020-04-06T12:00:00" },
//       { value: 50, key: "2020-04-07T12:00:00" }
//     ]
//   }
//     ]}
//     // dimensions={{
//     //   height: 1000,
//     //   width: 1000
//     // }}
//     isAnimated
//     state="Success"
//   />

// </PolarisVizProvider>
// </div>

// );
// }

import { DatePicker, Button, Popover, LegacyCard } from "@shopify/polaris";
import { useState, useCallback, useEffect, useRef } from "react";
import { PolarisVizProvider, BarChart, LineChart } from "@shopify/polaris-viz";
import "@shopify/polaris-viz/build/esm/styles.css";

function Linechart() {

    const dataref = useRef([]);

    const [popoverActive, setPopoverActive] = useState(false);
    const [notificationsdata, setnotificationsdata] = useState([]);
    const [{ month, year }, setDate] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      });
      const [selectedDates, setSelectedDates] = useState({
        start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        end: new Date()
      });
    
      const handleMonthChange = useCallback(
        (month, year) => setDate({ month, year }),
        []
      );

      const datepickmarkup = (
        <DatePicker
        month={month}
        year={year}
        onChange={setSelectedDates}
        onMonthChange={handleMonthChange}
        selected={selectedDates}
        multiMonth
        allowRange
      />
      );



      const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        [],
      );
    
      const activator = (
        <Button onClick={togglePopoverActive} disclosure>
          Select Date
        </Button>
      );
      
      const dateRange = (startDate, endDate, steps = 1) => {
        const dateArray = [];
        let currentDate = new Date(startDate);
        while (currentDate <= new Date(endDate)) {
          dateArray.push(new Date(currentDate).toDateString());
          currentDate.setUTCDate(currentDate.getUTCDate() + steps);
        }
        return dateArray;
      };

      const getanalyticdata = async () => {
        const dates = dateRange('2023-01-1', new Date());
        const arrayColumn = (arr, n) => arr.map(x => x[n]);
        var notifiarray = [
            { value: 50, key: "Tue Aug 01 2023" },
            { value: 99, key: "Wed Aug 02 2023" },
            { value: 10, key: "Tue Aug 15 2023" }
          ];
        var comparray = arrayColumn(notifiarray, "key");
        dates.map(function (val, index) {
           comparray.indexOf(val) === -1 ? notifiarray.push({value: Math.floor(Math.random() * 100), key: val}):'';
        });
        notifiarray.sort(function(a, b) {
          var keyA = new Date(a.key),
            keyB = new Date(b.key);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        // setnotificationsdata(notifiarray);

        dataref.current = notifiarray;

        handledatesubmit();
      };
      
      useEffect(() => {
        getanalyticdata();
      }, []);

      const handledatesubmit = () =>{
   
        let absolute = dataref.current.filter(function(item){
            if(selectedDates.start <= new Date(item.key) && selectedDates.end >= new Date(item.key)){
                return item;
            }
          });
          setnotificationsdata(absolute);
          setPopoverActive(false);
      };


    return (
        <div style={{height: '300px'}}>
        
        <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <Popover.Pane>
        <LegacyCard sectioned>
        {datepickmarkup}
        </LegacyCard>
        </Popover.Pane>

        <Popover.Pane fixed>
        <LegacyCard sectioned>
        <Button primary onClick={handledatesubmit}>Submit</Button>
        </LegacyCard>
        </Popover.Pane>

        
      </Popover>
      <br></br>

        <PolarisVizProvider>
        <LineChart
          data={[
            {
              name: "Notifications",
              data: notificationsdata
            }
        ]}
          theme="Light"
          isAnimated
          state="Success"
        />

        </PolarisVizProvider>
     </div>
    );
}


export default Linechart;