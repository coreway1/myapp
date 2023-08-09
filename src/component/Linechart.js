import {PolarisVizProvider, SparkBarChart, SparkLineChart, BarChart, LineChart} from '@shopify/polaris-viz';
import '@shopify/polaris-viz/build/esm/styles.css';

import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc, deleteDoc } from 'firebase/firestore';
import { useState, useCallback, useEffect, useRef } from 'react';

 function Linechart() {
  const db = getFirestore(app);

  const getanalytics = async (shopid) =>{
    const docRef = doc(db, shopid, "analytics");
    const docSnap = await getDoc(docRef);
    var data = docSnap.data() ? docSnap.data().data : [];
  };

  useEffect(() => {
    getanalytics("61718233334");
  }, []); 


return(

<div style={{height: '300px'}} >
<PolarisVizProvider>
  <LineChart
  theme='Light'
 data={[
      {
        name: "Notifications",
        data: [
          {
            key: 0,
            value: 100
          },
          {
            key: 1,
            value: 200
          },
          {
            key: 2,
            value: 300
          }
        ]
      },
      {
        name: "Notifications sent",
        data: [
          {
            key: 0,
            value: 10
          },
          {
            key: 1,
            value: 20
          },
          {
            key: 2,
            value: 30
          }
        ]
      },
      {
        name: "Order Value",
        data: [
          {
            key: 0,
            value: 250
          },
          {
            key: 1,
            value: 350
          },
          {
            key: 2,
            value: 390
          }
        ]
      }
    ]}
    // dimensions={{
    //   height: 1000,
    //   width: 1000
    // }}
    isAnimated
  />

</PolarisVizProvider>
</div>

);
}

export default Linechart;