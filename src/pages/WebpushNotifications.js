import {
  IndexTable,
  LegacyCard,
  IndexFilters,
  useSetIndexFiltersMode,
  useIndexResourceState,
  Text,
  Frame,
  Page,
  Pagination,
} from '@shopify/polaris';
import { useState, useCallback, useEffect, useRef } from 'react';
import NavigationMenu from "../component/navigation";
import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc } from 'firebase/firestore';


export default function WebpushNotifications({shop, shopid}) {


  const db = getFirestore(app);
  const count = useRef([]);
  const [hasPrevious, sethasPrevious] = useState(false);
  const [hasNext, sethasNext] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  const [data, setdata] = useState({});
  const [data2, setdata2] = useState({});
  
  const [loading, setloading] = useState(false);
  const [orders, setorders] = useState([]);
  const [queryValue, setQueryValue] = useState('');

  const getnotificationsdetails = async (modifiedArr) => {
    var formData = new FormData();
        formData.append('ids', JSON.stringify(modifiedArr));
        formData.append('shop', shop);

    const rawResponse = await fetch('https://app.mobivogue.com/app/getnotifications.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });
    const content = await rawResponse.json();
    setorders(content.data.nodes);
    count.current = content.data.nodes;  
  };

  const getemailnotifications = async (shopid) => {
    const docRef = doc(db, shopid, "webpush");
    const docSnap = await getDoc(docRef);
    var data = docSnap.data() ? docSnap.data().data : {};
    setdata(data);
    setdata2(data);
    const emailnoti = Object.keys(data);
    // setemailnotifications(emailnoti);
    const modifiedArr = emailnoti.map(name => `gid://shopify/ProductVariant/${name}`);
    getnotificationsdetails(modifiedArr);
  };

  useEffect(() => {
    if(shopid) getemailnotifications(shopid);   
  }, [shopid]); 


  const itemStrings = ['All'];

  const tabs = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => {},
    id: `${item}-${index}`,
    isLocked: index === 0
  }));
  const [selected, setSelected] = useState(0);
  const {mode, setMode} = useSetIndexFiltersMode();
  const onHandleCancel = () => {
    setQueryValue('');
    setloading(false);
    setorders(count.current);
  };

  const handleFiltersQueryChange = (value) => {
    setQueryValue(value);
      const result = count.current.filter(item =>item.displayName.toUpperCase().includes(value.toUpperCase()));
    setorders(result);
  };
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [
    handleQueryValueRemove,
  ]);
  const filters = [];
  const resourceName = {
    singular: 'notification',
    plural: 'notifications',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(orders);

    const handledelete = async () => {
      setloading(true);
      const newarray = data2;
      for (let i = 0; i < selectedResources.length; i++) {
        delete newarray[selectedResources[i].split("ProductVariant/")[1]];
      }
      const customerRef2 = doc(db, shopid, "webpush");
      await setDoc(customerRef2, {data: newarray});
      getemailnotifications(shopid);
      handleSelectionChange('all', false);
      setloading(false);
    };
   

    const promotedBulkActions = [
      {
        content: 'Delete Notificatons',
        onAction: handledelete,
      },
    ];


  const rowMarkup = orders.map(
    (
      {id, legacyResourceId, displayName},
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
            <Text fontWeight="bold" as="span">
            {displayName}
            </Text>          
          </IndexTable.Cell>
        <IndexTable.Cell>{data[legacyResourceId]?.length}</IndexTable.Cell>
        
      </IndexTable.Row>
    ),
  );

  return (
    <Frame navigation={<NavigationMenu path="/webpush-notifications" />}>
      <Page 
      title="Webpush Notifications"
      fullWidth
      >
    <LegacyCard>
      <IndexFilters
        queryValue={queryValue}
        queryPlaceholder="Search by product name"
        onQueryChange={handleFiltersQueryChange}
        onQueryClear={() => {
          setQueryValue('');
          setloading(false);
          setorders(count.current);
        }}
        cancelAction={{
          onAction: onHandleCancel,
          disabled: false,
          loading: false,
        }}
        tabs={tabs}
        selected={selected}
        onSelect={setSelected}
        canCreateNewView={false}
        filters={filters}
        onClearAll={handleFiltersClearAll}
        mode={mode}
        setMode={setMode}
        loading={loading}
      />
      <IndexTable
        resourceName={resourceName}
        itemCount={orders.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {title: 'Product'},
          {title: 'No of notifications'},
        ]}
        promotedBulkActions={promotedBulkActions}
      >
        {rowMarkup}
      </IndexTable>
      <br></br>
      <Pagination
      hasPrevious={hasPrevious}
      onPrevious={() => {
        setcurrentpage(currentpage-1);

      }}
      hasNext={hasNext}
      onNext={() => {
        setcurrentpage(currentpage+1);
      }}
    />
    <br></br>
    </LegacyCard>
    </Page>
    </Frame>
  );
}