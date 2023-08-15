import { useState, useCallback, useEffect, useRef } from 'react';
import {Page, Layout, LegacyCard, Frame, TextField, FormLayout, ContextualSaveBar, Toast, List, Form, DropZone, Banner} from '@shopify/polaris';
import NavigationMenu from "../component/navigation";
import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc } from 'firebase/firestore';

function Templates({shop, shopid}){
  const db = getFirestore(app);

  const defaultState = useRef({
    subjectFieldValue: '',
    fromemailField: '',
    LogoFieldValue: '',
    HeadingFieldValue: '',
    HeadingFieldTextColor: '',
    BodyFieldTextColor: '',
    LinkFieldTextColor: '',
    ContentFieldText: '',
    BuyButtonFieldTextColor: '',
    BuyButtonFieldBackgroundColor: '',
    BuyButtonFieldText: '',
    FooterFieldTextColor: '',
    FooterLinkFieldTextColor: '',
    FooterContentFieldText: ''
  });
  const [previewproduct, setpreviewproduct] = useState(false);
  const [shopdata, setshopdata] = useState(false);
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
      return finallogo;
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
    const customerRef2 = doc(db, shopid, "emailtemplate");
    await setDoc(customerRef2, {subjectFieldValue: subjectFieldValue, fromemailField: fromemailField, LogoFieldValue: await Main(), HeadingFieldValue: HeadingFieldValue, HeadingFieldTextColor: HeadingFieldTextColor, BodyFieldTextColor: BodyFieldTextColor, LinkFieldTextColor: LinkFieldTextColor, ContentFieldText: ContentFieldText, BuyButtonFieldTextColor: BuyButtonFieldTextColor, BuyButtonFieldBackgroundColor: BuyButtonFieldBackgroundColor, BuyButtonFieldText: BuyButtonFieldText, FooterFieldTextColor: FooterFieldTextColor, FooterLinkFieldTextColor: FooterLinkFieldTextColor, FooterContentFieldText: FooterContentFieldText});

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

  const getpreviewproduct = async (shop) => {

    const rawResponse = await fetch('https://app.mobivogue.com/react-php-final/getpreviewproduct.php?shop='+shop, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const content = await rawResponse.json();
    setpreviewproduct(content.data.products.edges[0]);

  };

  const getshopdata = async (shop) => {

    const rawResponse = await fetch('https://app.mobivogue.com/react-php-final/getshopdata.php?shop='+shop, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const content = await rawResponse.json();
    setshopdata(content.data.shop);
  };

  useEffect(() => {
    if(shopid) getemailtemplate(shopid);
    if(shop) getshopdata(shop);
    if(shop) getpreviewproduct(shop);
  }, [shopid, shop]); 



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
  const previewmarkup = () => {
    if(previewproduct){
      return(
    <>
  <title />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
  <meta name="format-detection" content="telephone=no" />
  {/*[if !mso]><!*/}
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,700"
    rel="stylesheet"
  />
  {/*<![endif]*/}
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      margin: 0 !important;\n      padding: 0 !important;\n      -webkit-text-size-adjust: 100% !important;\n      -ms-text-size-adjust: 100% !important;\n      -webkit-font-smoothing: antialiased !important;\n    }\n\n    img {\n      border: 0 !important;\n      outline: none !important;\n    }\n\n    p {\n      margin: 0px !important;\n      padding: 0px !important;\n    }\n\n    table {\n      border-collapse: collapse;\n      mso-table-lspace: 0px;\n      mso-table-rspace: 0px;\n    }\n\n    td, a, span {\n      border-collapse: collapse;\n      mso-line-height-rule: exactly;\n    }\n\n    .ExternalClass * {\n      line-height: 100%;\n    }\n\n    .em_defaultlink a {\n      color: inherit !important;\n      text-decoration: none !important;\n    }\n\n    span.MsoHyperlink {\n      mso-style-priority: 99;\n      color: inherit;\n    }\n\n    span.MsoHyperlinkFollowed {\n      mso-style-priority: 99;\n      color: inherit;\n    }\n\n    .em_header {\n      font-family: 'Lato', Arial, sans-serif;\n      font-size: 12px;\n      color: #888888;\n      text-decoration: none;\n    }\n\n    .em_header a {\n      color: #888888;\n      text-decoration: underline;\n    }\n\n    .em_text1 {\n      font-family: 'Lato', Arial, sans-serif;\n      font-size: 32px;\n      line-height: 37px;\n      color: #000;\n      text-decoration: none;\n      font-weight: bold;\n    }\n\n    .em_text2 {\n      font-family: 'Lato', Arial, sans-serif;\n      font-size: 19px;\n      line-height: 24px;\n      color: #333;\n      text-decoration: none;\n    }\n\n    .em_price_rules_text {\n      font-family: 'Lato', Arial, sans-serif;\n      font-size: 17px;\n      line-height: 24px;\n      color: ;\n      text-decoration: none;\n    }\n\n    .em_footer {\n      font-family: Arial, sans-serif;\n      font-size: 16px;\n      line-height: 24px;\n      color: #aaa;\n      text-decoration: none;\n    }\n\n    .em_footer a {\n      color: #777777;\n      text-decoration: underline;\n      white-space: nowrap;\n    }\n\n    .em_btn {\n      font-family: 'Lato', Arial, sans-serif;\n      font-size: 27px;\n      background-color: #222222;\n      text-decoration: none;\n      letter-spacing: 1px;\n    }\n\n    .em_btn a {\n      color: white;\n      text-decoration: none;\n    }\n\n    /*Stylesheet for the devices width between 481px to 599px*/\n    @media only screen and (min-width:481px) and (max-width:599px) {\n      .em_main_table {\n        width: 100% !important;\n      }\n\n      .em_wrapper {\n        width: 100% !important;\n      }\n\n      .em_side {\n        width: 10px !important;\n      }\n\n      .em_hide {\n        display: none !important;\n      }\n\n      .em_full_img {\n        width: 100% !important;\n        height: auto !important;\n      }\n\n      .em_center {\n        text-align: center !important;\n      }\n\n      .em_height {\n        height: 25px !important;\n      }\n\n      .em_gap_bottom {\n        padding-bottom: 20px !important;\n      }\n\n      .em_text1 {\n        font-size: 28px !important;\n        line-height: 30px !important;\n      }\n    }\n\n    /*Stylesheet for the devices width between 0px to 480px*/\n    @media only screen and (max-width:480px) {\n      .em_main_table {\n        width: 100% !important;\n      }\n\n      .em_wrapper {\n        width: 100% !important;\n      }\n\n      .em_side {\n        width: 10px !important;\n      }\n\n      .em_hide {\n        display: none !important;\n      }\n\n      .em_hide1 {\n        display: none !important;\n      }\n\n      .em_full_img {\n        width: 100% !important;\n        height: auto !important;\n      }\n\n      .em_center {\n        text-align: center !important;\n      }\n\n      .em_height {\n        height: 25px !important;\n      }\n\n      .em_gap_bottom {\n        padding-bottom: 20px !important;\n      }\n\n      .em_text1 {\n        font-size: 28px !important;\n        line-height: 30px !important;\n      }\n\n      .em_width {\n        width: 34px !important;\n        height: auto !important;\n      }\n\n      .em_footer {\n        font-size: 15px !important;\n        line-height: 23px !important;\n      }\n\n      .em_btn a {\n        text-decoration: none !important;\n      }\n    }\n  "
    }}
  />
  {/*[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]*/}
  <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
    <tbody>
      <tr>
        <td align="center">
          <table
            align="center"
            width={600}
            border={0}
            cellSpacing={0}
            cellPadding={0}
            className="em_main_table"
            style={{ tableLayout: "fixed" }}
          >
            <tbody>
              <tr>
                <td align="center" valign="top">
                  <table
                    width="100%"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    align="center"
                  >
                    <tbody>
                      <tr>
       
                        <td align="center" valign="top">
                          <table
                            width="100%"
                            border={0}
                            cellSpacing={0}
                            cellPadding={0}
                          >
                            <tbody>
                              
                              <tr>
                                <td
                                  align="center"
                                  valign="middle"
                                  className="em_header"
                                  style={{
                                    fontFamily: '"Lato", Arial, sans-serif',
                                    fontSize: "12px",
                                    lineHeight: "18px",
                                    color: LinkFieldTextColor,
                                    textDecoration: "none"
                                  }}
                                >
                                  {subjectFieldValue.replaceAll("{{product.title}}",previewproduct.node.title).replaceAll("{{shop.name}}",shopdata.name)}
                        
                                  <br className="em_hide1" />
                                  <a
                                    href={previewproduct.node.onlineStorePreviewUrl}
                                    target="_blank"
                                    style={{
                                      whiteSpace: "nowrap",
                                      color: LinkFieldTextColor,
                                      textDecoration: "underline"
                                    }}
                                  >
                                    View in browser
                                  </a>
                                </td>
                              </tr>
                           
                            </tbody>
                          </table>
                        </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <table
                    width="100%"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    align="center"
                  >
                    <tbody>
                      <tr>
                       
                        <td align="center" valign="top">
                          <table
                            width="100%"
                            border={0}
                            cellSpacing={0}
                            cellPadding={0}
                          >
                            <tbody>
                            
                              <tr>
                                <td align="center" valign="top">
                                  <a
                                    href={previewproduct.node.onlineStorePreviewUrl}
                                    target="_blank"
                                    style={{ textDecoration: "none" }}
                                  >
                                    <img
                                      src={file}
                                      alt={shop}
                                      width="100"
                                      height="100"
                                      style={{
                                        display: "block",
                                        border: "none",
                                        maxWidth: ""
                                      }}
                                    />
                                  </a>
                                </td>
                              </tr>
                            
                              <tr>
                                <td
                                  align="center"
                                  valign="middle"
                                  className="em_text1"
                                  style={{
                                    fontFamily: '"Lato", Arial, sans-serif',
                                    fontSize: "32px",
                                    lineHeight: "37px",
                                    color: HeadingFieldTextColor,
                                    textDecoration: "none",
                                    fontWeight: "bold"
                                  }}
                                >
                                   {HeadingFieldValue.replaceAll("{{product.title}}",previewproduct.node.title).replaceAll("{{variant.title}}",previewproduct.node.variants.edges[0].node.title).replaceAll("{{shop.name}}",shopdata.name)}
                        
                                </td>
                              </tr>
                            
                            </tbody>
                          </table>
                        </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" valign="top"></td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <table
                    width="100%"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          width={25}
                          style={{ width: 25 }}
                          className="em_side"
                        >
                          &nbsp;
                        </td>
                        <td align="center" valign="top">
                          <table
                            width="100%"
                            border={0}
                            cellSpacing={0}
                            cellPadding={0}
                          >
                            <tbody>
                              <tr>
                                <td
                                  height={24}
                                  style={{ height: 24 }}
                                  className="em_height"
                                >
                                  &nbsp;
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  valign="middle"
                                  className="em_text2"
                                  style={{
                                    fontFamily: '"Lato", Arial, sans-serif',
                                    fontSize: "19px",
                                    lineHeight: "24px",
                                    color: BodyFieldTextColor,
                                    textDecoration: "none"
                                  }}
                                >
                                {ContentFieldText.replaceAll("{{product.title}}",previewproduct.node.title).replaceAll("{{variant.title}}",previewproduct.node.variants.edges[0].node.title)}
                        
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={45}
                                  style={{ fontSize: 1, lineHeight: 1 }}
                                  className="em_height"
                                >
                                  &nbsp;
                                </td>
                              </tr>
                              <tr>
                                <td align="center" valign="top">
                                  <table
                                    width="50%"
                                    border={0}
                                    cellSpacing={0}
                                    cellPadding={0}
                                    align="center"
                                    style={{ width: "50%" }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          height={0}
                                          style={{
                                            fontSize: 0,
                                            lineHeight: 0,
                                            height: 0
                                          }}
                                        />
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <table
                                            width="100%"
                                            border={0}
                                            cellSpacing={0}
                                            cellPadding={0}
                                            align="center"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="right"
                                                  valign="middle"
                                                  width="12%"
                                                  style={{ width: "12%" }}
                                                >
                                                  &nbsp;
                                                </td>
                                                <td
                                                  align="center"
                                                  valign="middle"
                                                  bgcolor={BuyButtonFieldBackgroundColor}
                                                >
                                                  <table
                                                    width="100%"
                                                    border={0}
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                    bgcolor={BuyButtonFieldBackgroundColor}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          align="center"
                                                          valign="middle"
                                                          className="em_btn"
                                                          style={{
                                                            fontFamily:
                                                              '"Lato", Arial, sans-serif',
                                                            fontSize: 27,
                                                            backgroundColor:BuyButtonFieldBackgroundColor,
                                                            textDecoration:
                                                              "none",
                                                            letterSpacing: 1
                                                          }}
                                                        >
                                                          <a
                                                            href={previewproduct.node.onlineStorePreviewUrl}
                                                            target="_blank"
                                                            className="em_btn"
                                                            style={{
                                                              fontFamily:
                                                                '"Lato", Arial, sans-serif',
                                                              fontSize: 27,
                                                              color: "white",
                                                              textDecoration:
                                                                "none",
                                                              letterSpacing: 1,
                                                              padding: 12,
                                                              display:
                                                                "inline-block",
                                                              width: "100%"
                                                            }}
                                                          >
                                                          {BuyButtonFieldText}
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                                <td
                                                  align="left"
                                                  valign="middle"
                                                  width="12%"
                                                  style={{ width: "12%" }}
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          height={0}
                                          style={{
                                            fontSize: 0,
                                            lineHeight: 0,
                                            height: 0
                                          }}
                                        />
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={60}
                                  style={{ height: 60 }}
                                  className="em_height"
                                >
                                  &nbsp;
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td
                          width={25}
                          style={{ width: 25 }}
                          className="em_side"
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <table
                    width="100%"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                  >
                    <tbody>
                      <tr>
                        <td
                          width={25}
                          style={{ width: 25 }}
                          className="em_side"
                        >
                          &nbsp;
                        </td>
                        <td>
                          <table
                            width="100%"
                            border={0}
                            cellSpacing={0}
                            cellPadding={0}
                          >
                            <tbody>
                              <tr>
                                <td
                                  height={26}
                                  className="em_height"
                                  style={{ height: 26 }}
                                >
                                  &nbsp;
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  valign="middle"
                                  className="em_footer"
                                  style={{
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: FooterContentFieldText,
                                    textDecoration: "none"
                                  }}
                                >
                                  {FooterContentFieldText.replaceAll("{{variant.url}}",previewproduct.node.onlineStorePreviewUrl).replaceAll("{{link_color}}",FooterLinkFieldTextColor).replaceAll("{{shop.name}}",shopdata.name).replaceAll("{{shop.address1}}",shopdata.billingAddress.address1).replaceAll("{{shop.city}}",shopdata.billingAddress.city).replaceAll("{{shop.zip}}",shopdata.billingAddress.zip).replaceAll("{{shop.country}}",shopdata.billingAddress.country)}
                        
                                
                               
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={24}
                                  className="em_height"
                                  style={{ height: 24 }}
                                >
                                  &nbsp;
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={28}
                                  className="em_height"
                                  style={{ height: 28 }}
                                >
                                  &nbsp;
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td
                          width={25}
                          style={{ width: 25 }}
                          className="em_side"
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    className="em_hide"
    style={{ whiteSpace: "nowrap", font: "20px courier", color: "#FFFFFF" }}
  >
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  </div>
</>

  );
                                  }
                                }


                                const handlesendtestpushnoti = () =>{
                                  console.log("pushhhhhhhhhhhhhhhhhhhhhhhhhh");
                                  }


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
                <LegacyCard sectioned title="Preview" actions={[{content: 'Send test email', onAction:handlesendtestpushnoti}]}>
                  {previewmarkup()}
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