
import {
  Page,
  Layout,
  LegacyCard,
  Text,
  Frame
} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";
import Linechart from "../component/Linechart";
import {CustomerPlusMajor, SendMajor, QuickSaleMajor} from '@shopify/polaris-icons';
import app from "../fire-config.js";
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function Dashboard({shop, shopid}) {
  const db = getFirestore(app);

  const [totlanotifi, settotlanotifi] = useState(0);
  const [totlanotifisent, settotlanotifisent] = useState(0);
  const [ordervalue, setordervalue] = useState(0);
  

  const gettotalnotifications = async (shopid) => {


    const docRef = doc(db, shopid, "notifications");
    const docSnap = await getDoc(docRef);
    var data = docSnap.data() ? docSnap.data().data : {};
    const totalemails = Object.keys(data).length;

    const docRef2 = doc(db, shopid, "webpush");
    const docSnap2 = await getDoc(docRef2);
    var data2 = docSnap2.data() ? docSnap2.data().data : {};
    const totalwebpush = Object.keys(data2).length;

    settotlanotifi((totalemails+totalwebpush));

    const docRef22 = doc(db, shopid, "notificationssent");
    const docSnap22 = await getDoc(docRef22);
    var data22 = docSnap22.data() ? docSnap22.data() : {notificationssent: 0};

    settotlanotifisent(data22.notificationssent);

    const docRef222 = doc(db, shopid, "ordervalue");
    const docSnap222 = await getDoc(docRef222);
    var data22 = docSnap222.data() ? docSnap222.data() : {ordervalue: 0};

    setordervalue(data22.ordervalue);

    

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
            <LegacyCard title="" actions={[{content: 'Manage'}]}>
              <LegacyCard.Section>
                <Linechart shopid={shopid} />
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  );
}


export default Dashboard;