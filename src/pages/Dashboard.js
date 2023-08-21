
import {
  Page,
  Layout,
  LegacyCard,
  Text,
  Frame,
} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";
import Linechart from "../component/Linechart";
import {CustomerPlusMajor, SendMajor, QuickSaleMajor} from '@shopify/polaris-icons';
import app from "../fire-config.js";
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function Dashboard({shop, shopid, installeddate}) {
  const db = getFirestore(app);

  const [totlanotifi, settotlanotifi] = useState(0);
  const [totlanotifisent, settotlanotifisent] = useState(0);
  const [ordervalue, setordervalue] = useState(0);


  const arrayColumn = (arr, n) => arr.map(x => x[n]);
  

  const gettotalnotifications = async (shopid) => {


    const docRef = doc(db, shopid, "Notificationsanalytics");
    const docSnap = await getDoc(docRef);
    var data = docSnap.data() ? docSnap.data().data : [];

    var valueess1 = arrayColumn(data, "value");
    var numberArray1 = valueess1.map(Number);
    const sum1 = numberArray1.reduce((partialSum, a) => partialSum + a, 0);

    settotlanotifi(sum1);

    const docRef22 = doc(db, shopid, "Notificationssentanalytics");
    const docSnap22 = await getDoc(docRef22);
    var data22 = docSnap22.data() ? docSnap22.data().data : [];

    
    var valueess11 = arrayColumn(data22, "value");
    var numberArray11 = valueess11.map(Number);
    const sum11 = numberArray11.reduce((partialSum, a) => partialSum + a, 0);

    settotlanotifisent(sum11);

    const docRef222 = doc(db, shopid, "Ordersanalytics");
    const docSnap222 = await getDoc(docRef222);
    var data222 = docSnap222.data() ? docSnap222.data().data : [];

    var valueess111 = arrayColumn(data222, "value");
    var numberArray111 = valueess111.map(Number);
    const sum111 = numberArray111.reduce((partialSum, a) => partialSum + a, 0);

    setordervalue(sum111);

    

  };

  useEffect(() => {
    if(shopid) gettotalnotifications(shopid);
  }, [shopid]); 

  return (
    <Frame navigation={<NavigationMenu path="/" />}>
      <Page
        fullWidth
        title="Dashboard"
        subtitle='Track your recent activity.'
      >
        <Layout>
          <Layout.Section oneThird>
            <LegacyCard title="Notifications" actions={[{icon: CustomerPlusMajor}]}>
              <LegacyCard.Section>
                <Text color="heading2xl" as="h3">
                  {totlanotifi}
                </Text>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneThird>
            <LegacyCard title="Notifications sent" actions={[{icon: SendMajor}]}>
              <LegacyCard.Section>
              <Text color="heading2xl" as="h3">
                  {totlanotifisent}
                </Text>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneThird>
            <LegacyCard title="Order value" actions={[{icon: QuickSaleMajor}]}>
              <LegacyCard.Section>
              <Text color="heading2xl" as="h3">
                  {ordervalue}
                </Text>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section >
            <LegacyCard>
              <LegacyCard.Section>
                <Linechart shopid={shopid} installeddate={installeddate} />
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  );
}


export default Dashboard;