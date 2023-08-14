import {
  IndexTable,
  LegacyCard,
  IndexFilters,
  useSetIndexFiltersMode,
  useIndexResourceState,
  Text,
  Frame,
  Page,
  TextField, Modal, LegacyStack
} from '@shopify/polaris';
import { useState, useCallback, useEffect, useRef } from 'react';
import NavigationMenu from "../component/navigation";

import { useLocation, useParams } from "react-router";

import app from "../fire-config.js";
import { doc, setDoc, getFirestore } from 'firebase/firestore';

export default function Notificationsview({shop, shopid}) {

  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);


  const db = getFirestore(app);


  let emailsdata = useLocation();
  let { id } = useParams();

  const count = useRef([]);
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState('');
  const [orders, setorders] = useState(emailsdata.state.emails);
  const [queryValue, setQueryValue] = useState('');
  const [data, setdata] = useState(emailsdata.state.data);

  useEffect(() => {
    count.current = emailsdata.state.emails;
  }, []); 

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
      const result = count.current.filter(item =>item.toUpperCase().includes(value.toUpperCase()));
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
    singular: 'email',
    plural: 'emails',
  };

  const resourceIDResolver = (orders, index) => {
    return index;
  };


  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(orders, {
    resourceIDResolver,
  });

    const handledelete = async () => {
      var array = orders;
      setloading(true);
      for (let i = 0; i < selectedResources.length; i++) {
        array.splice(selectedResources[i], 1);
      }
      data[id] = array;
      const customerRef2 = doc(db, shopid, "notifications");
      await setDoc(customerRef2, {data: data});
      handleSelectionChange('all', false);
      setloading(false);
    };
   

    const promotedBulkActions = [
      {
        content: 'Delete Emails',
        onAction: handledelete,
      },
    ];

    const handleaddemail = async () => {
      setloading(true);
      var array = orders;
      if(array.indexOf(email) === -1){
        array.push(email);
      }
      data[id] = array;
      const customerRef2 = doc(db, shopid, "notifications");
      await setDoc(customerRef2, {data: data});
      setloading(false);
      toggleActive();
    };

    const handleChangeemail = (e) => {
      setemail(e);
    };

  const rowMarkup = orders.map(
    (
      email,
      index,
    ) => (
      <IndexTable.Row
        id={index}
        key={index}
        selected={selectedResources.includes(index)}
        position={index}
      >
        <IndexTable.Cell>
        
            <Text fontWeight="bold" as="span">
            {email}
            </Text>
    
          
          </IndexTable.Cell>

        
      </IndexTable.Row>
    ),
  );


  const modalmarkup = (
    <Modal
        small
        open={active}
        onClose={toggleActive}
        title="Add email"
        primaryAction={{
          content: 'Submit',
          loading: loading,
          onAction: handleaddemail,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            loading: loading,
            onAction: toggleActive,
          },
        ]}
      >
        <Modal.Section>
        <TextField
      label="Email"
      value={email}
      onChange={handleChangeemail}
      autoComplete="off"
    />
        </Modal.Section>
      </Modal>
  );

  return (
    <Frame navigation={<NavigationMenu path="/notifications" />}>

      <Page 
      backAction={{content: 'Email Notifications', url: '/notifications'}}
      title="Emails"
      fullWidth
      primaryAction={{content: 'Add Email', onAction: toggleActive }}
      >
    <LegacyCard>
      <IndexFilters
        queryValue={queryValue}
        queryPlaceholder="Search by email"
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
          {title: 'Email'}
        ]}
        promotedBulkActions={promotedBulkActions}
      >
        {rowMarkup}
      </IndexTable>
 
    </LegacyCard>
    </Page>
    {modalmarkup}
    </Frame>
  );
}