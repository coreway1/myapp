import { useState, useCallback, useEffect, useRef } from 'react';
import {Page, Layout, LegacyCard, Button, Frame, TextField, FormLayout, ContextualSaveBar, Toast, List, Form, DropZone, Banner} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";
import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc, deleteDoc } from 'firebase/firestore';

function Templates(){
  const db = getFirestore(app);

  const defaultState = useRef({
    subjectFieldValue: '{{product.title | strip_html}} is now available to order from {{shop.name}}',
    fromemailField: 'p@gmail.com',
    LogoFieldValue: '',
    HeadingFieldValue: '',
    HeadingFieldTextColor: '',
    BodyFieldTextColor: '',
    LinkFieldTextColor: '',
    ContentFieldText: 'You asked us to tell you when {{product.title}} {{ variant.title_unless_default }} would be available to purchase.We are pleased to tell you it is now available.Click below to place your order.',
    BuyButtonFieldTextColor: '',
    BuyButtonFieldBackgroundColor: '',
    BuyButtonFieldText: 'BUY NOW',
    FooterFieldTextColor: '',
    FooterLinkFieldTextColor: '',
    FooterContentFieldText: 'You are receiving this email because you requested a back in stock notification on <a href="{{variant.url }}" style="color: {{ link_color }} !important; text-decoration: none;">{{ shop.name }}</a>.{{ shop.name }} {{ shop.address1 }}, {{ shop.city }} {{ shop.zip }}, {{ shop.country }}<a href="{{ customer.unsubscribe_url }}">Manage your notifications</a>'
  });
  const [isDirty, setIsDirty] = useState(false);
  const [toastActive, setToastActive] = useState(false);

  const [subjectFieldValue, setsubjectFieldValue] = useState(
    defaultState.current.subjectFieldValue,
  );

  const [fromemailField, setfromemailField] = useState(
    defaultState.current.fromemailField,
  );

  const [HeadingFieldValue, setHeadingFieldValue] = useState(
    defaultState.current.HeadingFieldValue,
  );

  const [HeadingFieldTextColor, setHeadingFieldTextColor] = useState(
    defaultState.current.HeadingFieldTextColor,
  );

  const [BodyFieldTextColor, setBodyFieldTextColor] = useState(
    defaultState.current.BodyFieldTextColor,
  );
  const [LinkFieldTextColor, setLinkFieldTextColor] = useState(
    defaultState.current.LinkFieldTextColor,
  );
  const [ContentFieldText, setContentFieldText] = useState(
    defaultState.current.ContentFieldText,
  );

  const [BuyButtonFieldTextColor, setBuyButtonFieldTextColor] = useState(
    defaultState.current.BuyButtonFieldTextColor,
  ); 
  const [BuyButtonFieldBackgroundColor, setBuyButtonFieldBackgroundColor] = useState(
    defaultState.current.BuyButtonFieldBackgroundColor,
  ); 
  const [BuyButtonFieldText, setBuyButtonFieldText] = useState(
    defaultState.current.BuyButtonFieldText,
  );

  const [FooterFieldTextColor, setFooterFieldTextColor] = useState(
    defaultState.current.FooterFieldTextColor,
  ); 
  const [FooterLinkFieldTextColor, setFooterLinkFieldTextColor] = useState(
    defaultState.current.FooterLinkFieldTextColor,
  ); 
  const [FooterContentFieldText, setFooterContentFieldText] = useState(
    defaultState.current.FooterContentFieldText,
  );


  const [file, setFile] = useState();
  const [rejectedFiles, setRejectedFiles] = useState([]);

  const handleDiscard = useCallback(() => {
    setsubjectFieldValue(defaultState.current.subjectFieldValue);
    setfromemailField(defaultState.current.fromemailField);
    setFile(defaultState.current.LogoFieldValue);
    setHeadingFieldValue(defaultState.current.HeadingFieldValue);
    setHeadingFieldTextColor(defaultState.current.HeadingFieldTextColor);

    setBodyFieldTextColor(defaultState.current.BodyFieldTextColor);
    setLinkFieldTextColor(defaultState.current.LinkFieldTextColor);
    setContentFieldText(defaultState.current.ContentFieldText);

    setBuyButtonFieldTextColor(defaultState.current.BuyButtonFieldTextColor);
    setBuyButtonFieldBackgroundColor(defaultState.current.BuyButtonFieldBackgroundColor);
    setBuyButtonFieldText(defaultState.current.BuyButtonFieldText);

    setFooterFieldTextColor(defaultState.current.FooterFieldTextColor);
    setFooterLinkFieldTextColor(defaultState.current.FooterLinkFieldTextColor);
    setFooterContentFieldText(defaultState.current.FooterContentFieldText);

    setIsDirty(false);
  }, []);

  const handleNameFieldChange = useCallback((value) => {
    setsubjectFieldValue(value);
    value && setIsDirty(true);
  }, []);

  const handleFromEmailFieldChange = useCallback((value) => {
    setfromemailField(value);
    value && setIsDirty(true);
  }, []);

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

    async function Main() {
      var finallogo = await toBase64(file);
      setFile(finallogo);
    }

 

  const handleHeadingFieldChange = useCallback((value) => {
    setHeadingFieldValue(value);
    value && setIsDirty(true);
  }, []);

  const handleHeadingFieldTextColorChange = useCallback((value) => {
    setHeadingFieldTextColor(value);
    value && setIsDirty(true);
  }, []);

  const handleBodyFieldTextColorChange = useCallback((value) => {
    setBodyFieldTextColor(value);
    value && setIsDirty(true);
  }, []);

  const handleLinkFieldTextColorChange = useCallback((value) => {
    setLinkFieldTextColor(value);
    value && setIsDirty(true);
  }, []);

  const handleContentFieldTextChange = useCallback((value) => {
    setContentFieldText(value);
    value && setIsDirty(true);
  }, []);

  const handleBuyButtonFieldTextColorChange = useCallback((value) => {
    setBuyButtonFieldTextColor(value);
    value && setIsDirty(true);
  }, []);
  const handleBuyButtonFieldBackgroundColorChange = useCallback((value) => {
    setBuyButtonFieldBackgroundColor(value);
    value && setIsDirty(true);
  }, []);
  const handleBuyButtonFieldTextChange = useCallback((value) => {
    setBuyButtonFieldText(value);
    value && setIsDirty(true);
  }, []);

  const handleFooterFieldTextColorChange = useCallback((value) => {
    setFooterFieldTextColor(value);
    value && setIsDirty(true);
  }, []);
  const handleFooterLinkFieldTextColorChange = useCallback((value) => {
    setFooterLinkFieldTextColor(value);
    value && setIsDirty(true);
  }, []);
  const handleFooterContentFieldTextChange = useCallback((value) => {
    setFooterContentFieldText(value);
    value && setIsDirty(true);
  }, []);


  

  const handleSave = useCallback(async () => {
    Main();
    defaultState.current.subjectFieldValue = subjectFieldValue;
    defaultState.current.fromemailField = fromemailField;
    defaultState.current.LogoFieldValue = file;
    defaultState.current.HeadingFieldValue = HeadingFieldValue;
    defaultState.current.HeadingFieldTextColor = HeadingFieldTextColor;

    defaultState.current.BodyFieldTextColor = BodyFieldTextColor;
    defaultState.current.LinkFieldTextColor = LinkFieldTextColor;
    defaultState.current.ContentFieldText = ContentFieldText;

    defaultState.current.BuyButtonFieldTextColor = BuyButtonFieldTextColor;
    defaultState.current.BuyButtonFieldBackgroundColor = BuyButtonFieldBackgroundColor;
    defaultState.current.BuyButtonFieldText = BuyButtonFieldText;

    defaultState.current.FooterFieldTextColor = FooterFieldTextColor;
    defaultState.current.FooterLinkFieldTextColor = FooterLinkFieldTextColor;
    defaultState.current.FooterContentFieldText = FooterContentFieldText;
    
    
    setIsDirty(false);
    setToastActive(true);
    const customerRef2 = doc(db, "61718233334", "emailtemplate");
    await setDoc(customerRef2, {subjectFieldValue: subjectFieldValue, fromemailField: fromemailField, LogoFieldValue: file, HeadingFieldValue: HeadingFieldValue, HeadingFieldTextColor: HeadingFieldTextColor, BodyFieldTextColor: BodyFieldTextColor, LinkFieldTextColor: LinkFieldTextColor, ContentFieldText: ContentFieldText, BuyButtonFieldTextColor: BuyButtonFieldTextColor, BuyButtonFieldBackgroundColor: BuyButtonFieldBackgroundColor, BuyButtonFieldText: BuyButtonFieldText, FooterFieldTextColor: FooterFieldTextColor, FooterLinkFieldTextColor: FooterLinkFieldTextColor, FooterContentFieldText: FooterContentFieldText});

  }, [subjectFieldValue, fromemailField, file, HeadingFieldValue, HeadingFieldTextColor, BodyFieldTextColor, LinkFieldTextColor, ContentFieldText, BuyButtonFieldTextColor, BuyButtonFieldBackgroundColor, BuyButtonFieldText, FooterFieldTextColor, FooterLinkFieldTextColor, FooterContentFieldText]);

  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

  const getemailtemplate = async (shopid) => {

    const docRef = doc(db, shopid, "emailtemplate");
    const docSnap = await getDoc(docRef);
    var data = docSnap.data() ? docSnap.data() : {};
    var objectLength = Object.keys(data).length;
    if(objectLength > 0){
      defaultState.current.subjectFieldValue = data.subjectFieldValue;
      defaultState.current.fromemailField = data.fromemailField;
      defaultState.current.LogoFieldValue = data.LogoFieldValue;
      defaultState.current.HeadingFieldValue = data.HeadingFieldValue;
      defaultState.current.HeadingFieldTextColor = data.HeadingFieldTextColor;

      defaultState.current.BodyFieldTextColor = data.BodyFieldTextColor;
      defaultState.current.LinkFieldTextColor = data.LinkFieldTextColor;
      defaultState.current.ContentFieldText = data.ContentFieldText;

      defaultState.current.BuyButtonFieldTextColor = data.BuyButtonFieldTextColor;
    defaultState.current.BuyButtonFieldBackgroundColor = data.BuyButtonFieldBackgroundColor;
    defaultState.current.BuyButtonFieldText = data.BuyButtonFieldText;

    defaultState.current.FooterFieldTextColor = data.FooterFieldTextColor;
    defaultState.current.FooterLinkFieldTextColor = data.FooterLinkFieldTextColor;
    defaultState.current.FooterContentFieldText = data.FooterContentFieldText;


      setsubjectFieldValue(data.subjectFieldValue);
      setfromemailField(data.fromemailField);
      setFile(data.LogoFieldValue);
      setHeadingFieldValue(data.HeadingFieldValue);
      setHeadingFieldTextColor(data.HeadingFieldTextColor);
      setBodyFieldTextColor(data.BodyFieldTextColor);
      setLinkFieldTextColor(data.LinkFieldTextColor);
      setContentFieldText(data.ContentFieldText);
      setBuyButtonFieldTextColor(data.BuyButtonFieldTextColor);
      setBuyButtonFieldBackgroundColor(data.BuyButtonFieldBackgroundColor);
      setBuyButtonFieldText(data.BuyButtonFieldText);
      setFooterFieldTextColor(data.FooterFieldTextColor);
      setFooterLinkFieldTextColor(data.FooterLinkFieldTextColor);
      setFooterContentFieldText(data.FooterContentFieldText);

      
    }
  };

  useEffect(() => {
    getemailtemplate("61718233334");
  }, []); 



  const hasError = rejectedFiles.length > 0;

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, rejectedFiles) => {
      setRejectedFiles(rejectedFiles);
      setFile(acceptedFiles[0]);
      acceptedFiles[0] && setIsDirty(true);
      
    },
    []
  );

  const errorMessage = hasError && (
    <Banner
      title="The following images couldn’t be uploaded:"
      status="critical"
    >
      <List type="bullet">
        {rejectedFiles.map((file, index) => (
          <List.Item key={index}>
            {`"${file.name}" is not supported. File type must be image.`}
          </List.Item>
        ))}
      </List>
    </Banner>
  );

  const fileUpload = !file && <DropZone.FileUpload />;
  const uploadedFile = file && (
    <img
      alt=""
      width="150"
      height="auto"
      src={typeof file === "string" ? file : window.URL.createObjectURL(file)}
    />
  );
  const previewmarkup = (
    <Button>{subjectFieldValue}</Button>
  );

    return (
        <Frame navigation={<NavigationMenu path="/templates" />}>
          <Page title="Email Template" fullWidth>
            <Layout>
              <Layout.Section oneHalf>
              <Form>
              
              <LegacyCard title="Email">
                <LegacyCard.Section>
                <FormLayout>
                    <TextField
                      label="Subject"
                      value={subjectFieldValue}
                      onChange={handleNameFieldChange}
                      name='subjectField'
                      autoComplete="off"
                    />

                    <TextField
                      label="From email address"
                      value={fromemailField}
                      onChange={handleFromEmailFieldChange}
                      name='fromemailField'
                      autoComplete="off"
                    />
                    </FormLayout>
                  
                </LegacyCard.Section>

                <LegacyCard.Section subdued title="Header">
                    <FormLayout>
                   
               
                      {/* <div style={{ width: 114, height: 114 }}> */}
                        <DropZone
                        label="Logo"
                          allowMultiple={false}
                          onDrop={handleDropZoneDrop}
                          accept="image/*"
                          type="image"
                          errorOverlayText="File type must image"
                        >
                          {uploadedFile}
                          {fileUpload}
                        </DropZone>

                        {errorMessage}

                      {/* </div> */}

                      <TextField
                        label="Heading"
                        value={HeadingFieldValue}
                        onChange={handleHeadingFieldChange}
                        name='heading'
                        autoComplete="off"
                      />
                      <TextField
                        label="Text Color"
                        type='color'
                        value={HeadingFieldTextColor}
                        onChange={handleHeadingFieldTextColorChange}
                        name='HeadingFieldTextColor'
                        autoComplete="off"
                      />
                    </FormLayout>
                </LegacyCard.Section>

                <LegacyCard.Section subdued title="Body">
                  <FormLayout>
                      <TextField
                        label="Text Color"
                        type='color'
                        value={BodyFieldTextColor}
                        onChange={handleBodyFieldTextColorChange}
                        name='BodyFieldTextColor'
                        autoComplete="off"
                      />
                      <TextField
                        label="Link Color"
                        type='color'
                        value={LinkFieldTextColor}
                        onChange={handleLinkFieldTextColorChange}
                        name='LinkFieldTextColor'
                        autoComplete="off"
                      />
                      <TextField
                        label="Content"
                        value={ContentFieldText}
                        onChange={handleContentFieldTextChange}
                        name='ContentFieldText'
                        autoComplete="off"
                        multiline={4}
                      />

                  </FormLayout>
                </LegacyCard.Section>

                <LegacyCard.Section subdued title="Buy button">
                  <FormLayout>
                      <TextField
                        label="Text Color"
                        type='color'
                        value={BuyButtonFieldTextColor}
                        onChange={handleBuyButtonFieldTextColorChange}
                        name='BuyButtonFieldTextColor'
                        autoComplete="off"
                      />
                      <TextField
                        label="Background Color"
                        type='color'
                        value={BuyButtonFieldBackgroundColor}
                        onChange={handleBuyButtonFieldBackgroundColorChange}
                        name='BuyButtonFieldBackgroundColor'
                        autoComplete="off"
                      />
                      <TextField
                        label="Button Text"
                        value={BuyButtonFieldText}
                        onChange={handleBuyButtonFieldTextChange}
                        name='BuyButtonFieldText'
                        autoComplete="off"
                      />
                  </FormLayout>
                </LegacyCard.Section>

                <LegacyCard.Section subdued title="Footer">
                <FormLayout>
                      <TextField
                        label="Text Color"
                        type='color'
                        value={FooterFieldTextColor}
                        onChange={handleFooterFieldTextColorChange}
                        name='FooterFieldTextColor'
                        autoComplete="off"
                      />
                      <TextField
                        label="Link Color"
                        type='color'
                        value={FooterLinkFieldTextColor}
                        onChange={handleFooterLinkFieldTextColorChange}
                        name='FooterLinkFieldTextColor'
                        autoComplete="off"
                      />
                      <TextField
                        label="Content"
                        value={FooterContentFieldText}
                        onChange={handleFooterContentFieldTextChange}
                        name='FooterContentFieldText'
                        autoComplete="off"
                        multiline={4}
                      />

                  </FormLayout>
                </LegacyCard.Section>

              </LegacyCard>
              
              </Form>

            
              </Layout.Section>
              <Layout.Section oneHalf>
                <LegacyCard sectioned>
                  {previewmarkup}
                </LegacyCard>
              </Layout.Section>
            </Layout>
          </Page>
          {contextualSaveBarMarkup}
          {toastMarkup}
        </Frame>
    );
}
  
export default Templates;