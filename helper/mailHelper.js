exports.confirmEmail = function (emailToken, name) {
    return `
<!DOCTYPE html>
        <html  style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
        <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>danmunropt.com</title>
			  <style type="text/css">
			         img {
			         max-width: 100%;
			         }
			         body {
			         -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
			         }
			         body {
			         background-color: #f6f6f6;
			         }
			         .es-wrapper-color {
			             background-color: rgb(244, 244, 244);
			         }
			         #outlook a {
			             padding: 0;
			         }

			         .ExternalClass {
			             width: 100%;
			         }

			         .ExternalClass,
			         .ExternalClass p,
			         .ExternalClass span,
			         .ExternalClass font,
			         .ExternalClass td,
			         .ExternalClass div {
			             line-height: 100%;
			         }

			         .es-button {
			             mso-style-priority: 100 !important;
			             text-decoration: none !important;
			         }

			         a[x-apple-data-detectors] {
			             color: inherit !important;
			             text-decoration: none !important;
			             font-size: inherit !important;
			             font-family: inherit !important;
			             font-weight: inherit !important;
			             line-height: inherit !important;
			         }

			         .es-desk-hidden {
			             display: none;
			             float: left;
			             overflow: hidden;
			             width: 0;
			             max-height: 0;
			             line-height: 0;
			             mso-hide: all;
			         }

			         /*
			     END OF IMPORTANT
			     */
			         s {
			             text-decoration: line-through;
			         }

			         html,
			         body {
			             width: 100%;
			             font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;
			             -webkit-text-size-adjust: 100%;
			             -ms-text-size-adjust: 100%;
			         }

			         table {
			             mso-table-lspace: 0pt;
			             mso-table-rspace: 0pt;
			             border-collapse: collapse;
			             border-spacing: 0px;
			         }

			         table td,
			         html,
			         body,
			         .es-wrapper {
			             padding: 0;
			             Margin: 0;
			         }

			         .es-content,
			         .es-header,
			         .es-footer {
			             table-layout: fixed !important;
			             width: 100%;
			         }

			         table tr {
			             border-collapse: collapse;
			         }


			         h1,
			         h2,
			         h3,
			         h4,
			         h5 {
			             Margin: 0;
			             line-height: 120%;
			             mso-line-height-rule: exactly;
			             font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;
			         }

			         p,
			         ul li,
			         ol li,
			         a {
			             -webkit-text-size-adjust: none;
			             -ms-text-size-adjust: none;
			             mso-line-height-rule: exactly;
			         }

			         .es-left {
			             float: left;
			         }

			         .es-right {
			             float: right;
			         }

			         .es-p5 {
			             padding: 5px;
			         }

			         .es-p5t {
			             padding-top: 0px;
			         }

			         .es-p5b {
			             padding-bottom: 0px;
			         }

			         .es-p5l {
			             padding-left: 5px;
			         }

			         .es-p5r {
			             padding-right: 5px;
			         }

			         .es-p10 {
			             padding: 10px;
			         }

			         .es-p10t {
			             padding-top: 10px;
			         }

			         .es-p10b {
			             padding-bottom: 10px;
			         }

			         .es-p10l {
			             padding-left: 10px;
			         }

			         .es-p10r {
			             padding-right: 10px;
			         }

			         .es-p15 {
			             padding: 15px;
			         }

			         .es-p15t {
			             padding-top: 10px;
			         }

			         .es-p15b {
			             padding-bottom: 10px;
			         }

			         .es-p15l {
			             padding-left: 15px;
			         }

			         .es-p15r {
			             padding-right: 15px;
			         }

			         .es-p20 {
			             padding: 20px;
			         }

			         .es-p20t {
			             padding-top: 20px;
			         }

			         .es-p20b {
			             padding-bottom: 10px;
			         }

			         .es-p20l {
			             padding-left: 20px;
			         }

			         .es-p20r {
			             padding-right: 20px;
			         }

			         .es-p25 {
			             padding: 25px;
			         }

			         .es-p25t {
			             padding-top: 0px;
			         }

			         .es-p25b {
			             padding-bottom: 5px;
			         }

			         .es-p25l {
			             padding-left: 25px;
			         }

			         .es-p25r {
			             padding-right: 25px;
			         }

			         .es-p30 {
			             padding: 30px;
			         }

			         .es-p30t {
			             padding-top: 30px;
			         }

			         .es-p30b {
			             padding-bottom: 30px;
			         }

			         .es-p30l {
			             padding-left: 30px;
			         }

			         .es-p30r {
			             padding-right: 30px;
			         }

			         .es-p35 {
			             padding: 35px;
			         }

			         .es-p35t {
			             padding-top: 35px;
			         }

			         .es-p35b {
			             padding-bottom: 35px;
			         }

			         .es-p35l {
			             padding-left: 35px;
			         }

			         .es-p35r {
			             padding-right: 35px;
			         }

			         .es-p40 {
			             padding: 40px;
			         }

			         .es-p40t {
			             padding-top: 10px;
			         }

			         .es-p40b {
			             padding-bottom: 10px;
			         }

			         .es-p40l {
			             padding-left: 40px;
			         }

			         .es-p40r {
			             padding-right: 40px;
			         }

			         .es-menu td {
			             border: 0;
			         }

			         .es-menu td a img {
			             display: inline-block !important;
			         }

			         /* END CONFIG STYLES */
			         a {
			             font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;
			             font-size: 20px;
			             text-decoration: none;
			         }

			         a:hover {
			             font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;
			             font-size: 20px;
			             text-decoration: underline;
			         }

			         h2 {
			             font-size: 24px;
			             font-style: normal;
			             font-weight: normal;
			             color: black;
			         }

			         h2 a {
			             font-size: 24px;
			         }

			         h3 {
			             font-size: 20px;
			             font-style: normal;
			             font-weight: normal;
			             color: black;
			         }

			         h3 a {
			             font-size: 20px;
			         }

			         p {
			             font-size: 18px;
			             font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;
			             line-height: 150%;
			             color: #473D33;
			         }

			         ul li,
			         ol li {
			             Margin-bottom: 15px;
			         }

			         .es-menu td a {
			             text-decoration: none;
			             display: block;
			         }

			         .es-wrapper {
			             width: 100%;
			             height: 100%;
			             background-repeat: repeat;
			             background-position: center top;
			         }

			         .es-wrapper-color {
			             background-color: rgb(244, 244, 244);
			         }

			         .es-content-body {
			             background-color: white;
			         }

			         .es-content-body p {
			             color: rgb(71, 61, 51);
			         }

			         .es-content-body a {
			             color: rgb(0, 133, 236);
			         }

			         .es-header {
			             background-color: #0085ec;
			             background-repeat: repeat;
			             background-position: center top;
			         }

			         .es-header-body {
			             background-color: #0085ec;
			             width:100%;
			         }

			         .es-header-body p {
			             color: rgb(131, 127, 127);
			             font-size: 14px;
			         }

			         .es-header-body a {
			             color: rgb(0, 133, 236);
			             font-size: 14px;
			         }

			         .es-footer-body p,
			         .es-footer-body ul li,
			         .es-footer-body ol li {
			             color: rgb(131, 127, 127);
			             font-size: 14px;
			         }

			         .es-footer-body {
			             color: rgb(131, 127, 127);
			             font-size: 12px;
			         }

			         .es-footer-body a {
			             color: rgb(131, 127, 127);
			             font-size: 12px;
			             text-decoration: none;
			         }

			         .es-footer-body a:hover {
			             color: rgb(131, 127, 127);
			             font-size: 12px;
			             text-decoration: underline;

			         }

			         a.es-button {
			             border-style: solid;
			             border-color: rgb(0, 133, 236);
			             border-width: 14px 38px 14px 38px;
			             display: inline-block;
			             background-color: rgb(0, 133, 236);
			             border-radius: 12px;
			             font-size: 20px;
			             font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
			             font-weight: normal;
			             font-style: normal;
			             line-height: 120%;
			             color: white;
			             text-decoration: none;
			             width: auto;
			             text-align: center;

			         }

			         .es-button-border {
			             border-style: solid solid solid solid;
			             border-color: rgb(0, 133, 236);
			             background-color: rgb(0, 133, 236);
			             border-width: 1px 1px 1px 1px;
			             display: inline-block;
			             border-radius: 12px;
			             width: auto;
			         }

			         /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
			         @media only screen and (max-width: 600px) {

			             p,
			             ul li,
			             ol li,
			             a {
			                 font-size: 16px !important;
			                 line-height: 150% !important;
			             }

			             h1 {
			                 font-size: 30px !important;
			                 text-align: center;
			                 line-height: 120% !important;
			             }

			             h2 {
			                 font-size: 26px !important;
			                 text-align: center;
			                 line-height: 120% !important;
			             }

			             h3 {
			                 font-size: 20px !important;
			                 text-align: center;
			                 line-height: 120% !important;
			             }

			             h1 a {
			                 font-size: 30px !important;
			             }

			             h2 a {
			                 font-size: 26px !important;
			             }

			             h3 a {
			                 font-size: 20px !important;
			             }

			             .es-menu td a {
			                 font-size: 11px !important;
			             }

			             .es-header-body p,
			             .es-header-body ul li,
			             .es-header-body ol li,
			             .es-header-body a {
			                 font-size: 11px !important;
			             }

			             .es-footer-body p,
			             .es-footer-body ul li,
			             .es-footer-body ol li,
			             .es-footer-body a {
			                 font-size: 11px !important;
			             }

			             .es-infoblock p,
			             .es-infoblock ul li,
			             .es-infoblock ol li,
			             .es-infoblock a {
			                 font-size: 11x !important;
			             }

			             *[class="gmail-fix"] {
			                 display: none !important;
			             }

			             .es-m-txt-c,
			             .es-m-txt-c h1,
			             .es-m-txt-c h2,
			             .es-m-txt-c h3 {
			                 text-align: center !important;
			             }

			             .es-m-txt-r,
			             .es-m-txt-r h1,
			             .es-m-txt-r h2,
			             .es-m-txt-r h3 {
			                 text-align: right !important;
			             }

			             .es-m-txt-l,
			             .es-m-txt-l h1,
			             .es-m-txt-l h2,
			             .es-m-txt-l h3 {
			                 text-align: left !important;
			             }

			             .es-m-txt-r img,
			             .es-m-txt-c img,
			             .es-m-txt-l img {
			                 display: inline !important;
			             }

			             .es-button-border {
			                 display: block !important;
			             }

			             a.es-button {
			                 font-size: 20px !important;
			                 display: block !important;
			                 border-width: 15px 20px 15px 20px !important;
			             }

			             .es-btn-fw {
			                 border-width: 10px 0px !important;
			                 text-align: center !important;
			             }

			             .es-adaptive table,
			             .es-btn-fw,
			             .es-btn-fw-brdr,
			             .es-left,
			             .es-right {
			                 width: 100% !important;
			             }

			             .es-content table,
			             .es-header table,
			             .es-footer table,
			             .es-content,
			             .es-footer,
			             .es-header {
			                 width: 100% !important;
			                 max-width: 600px !important;
			             }

			             .es-adapt-td {
			                 display: block !important;
			                 width: 100% !important;
			             }

			             .adapt-img {
			                 width: 100% !important;
			                 height: auto !important;
			             }

			             .es-m-p0 {
			                 padding: 0px !important;
			             }

			             .es-m-p0r {
			                 padding-right: 0px !important;
			             }

			             .es-m-p0l {
			                 padding-left: 0px !important;
			             }

			             .es-m-p0t {
			                 padding-top: 0px !important;
			             }

			             .es-m-p0b {
			                 padding-bottom: 0 !important;
			             }

			             .es-m-p20b {
			                 padding-bottom: 10px !important;
			             }

			             .es-mobile-hidden,
			             .es-hidden {
			                 display: none !important;
			             }

			             tr.es-desk-hidden,
			             td.es-desk-hidden,
			             table.es-desk-hidden {
			                 width: auto !important;
			                 overflow: visible !important;
			                 float: none !important;
			                 max-height: inherit !important;
			                 line-height: inherit !important;
			             }

			             tr.es-desk-hidden {
			                 display: table-row !important;
			             }

			             table.es-desk-hidden {
			                 display: table !important;
			             }

			             td.es-desk-menu-hidden {
			                 display: table-cell !important;
			             }

			             .es-menu td {
			                 width: 1% !important;
			             }

			             table.es-table-not-adapt,
			             .esd-block-html table {
			                 width: auto !important;
			             }

			             table.es-social {
			                 display: inline-block !important;
			             }

			             table.es-social td {
			                 display: inline-block !important;
			             }
			             .es-p30l {
			             padding-left: 15px;
			         }

			         .es-p30r {
			             padding-right: 15px;
			         }
			         }


			         /* END RESPONSIVE STYLES */
			         .es-p-default {
			             padding-top: 20px;
			             padding-right: 30px;
			             padding-bottom: 0px;
			             padding-left: 30px;
			         }

			         .es-p-all-default {
			             padding: 0px;
			         }
			         .es-p40t {
			             padding-top: 20px;
			         }

			         .es-p40b {
			             padding-bottom: 20px;
			         }

			         @media only screen and (max-width: 640px) {
			         body {
			             padding: 0 !important;
			         }
			         h1 {
			             font-weight: 800 !important; margin: 20px 0 5px !important;
			         }
			         h2 {
			             font-weight: 800 !important; margin: 20px 0 5px !important;
			         }
			         h3 {
			             font-weight: 800 !important; margin: 20px 0 5px !important;
			         }
			         h4 {
			             font-weight: 800 !important; margin: 20px 0 5px !important;
			         }
			         h1 {
			             font-size: 22px !important;
			         }
			         h2 {
			             font-size: 18px !important;
			         }
			         h3 {
			             font-size: 16px !important;
			         }
			         .container {
			             padding: 0 !important; width: 100% !important;
			         }
			         .content {
			             padding: 0 !important;
			         }
			         .content-wrap {
			             padding: 10px !important;
			         }
			         .invoice {
			             width: 100% !important;
			         }

			         }
			         </style>
			         </head>
        <body style="background-color:#E0E0E0;">
    <table style="width:100%; background-color:#01b39">
        <tbody>
        <tr>
            <td class="esd-stripe" esd-custom-block-id="6339" style="background-color: rgb(0,133,236);"
                background-color="rgb(0,133,236)" align="center">
                <table class="es-header-body"style="width:100%"; cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-structure es-p20t es-p10b es-p10r es-p10l" align="left">
                                <table style="width:100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td class="esd-container-frame" width="580" valign="top"
                                                align="center">
                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-block-image es-p25t es-p25b es-p10r es-p10l"align="center" style="font-size:0"></td>
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
            </td>
        </tr>
    </tbody>
    </table>
    <table class="es-content" cellspacing="0" cellpadding="0" width="100%" align="center">
    <tbody>
        <tr>
            <td class="esd-stripe" style="background-color: rgb(0,133,236);" esd-custom-block-id="6340"
                background-color="rgb(0,133,236)" align="center">
                <table class="es-content-body" style="background-color: transparent;" width="600"
                    cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-structure" align="left">
                                <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td class="esd-container-frame" width="600" valign="top"
                                                align="center">
                                                <table
                                                    style="background-color: white; border-collapse: separate;"
                                                    width="100%" cellspacing="0" cellpadding="0"
                                                    background-color="rgb(0,133,236)">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-block-text es-p35t es-p5b es-p30r es-p30l"align="center">
                                                            <h2    style="color: rgb(0,133,236); font-size: 32px; line-height: 0.8;">
                                                  </h2>
                                                 <h2 style="font-size: 24px;font-weight:400; color: rgb(71,61,51);">
                                                 Confirm your email</h2>
                                                               </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-block-spacer es-p5t es-p5b es-p20r es-p20l"background-color="white" align="center"style="font-size:0"><table width="100%" height="100%"    cellspacing="0" cellpadding="0" border="0">    <tbody>        <tr>            <td                style="border-bottom: 1px solid:rgb(255,255,255); background-color: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;">            </td>        </tr>    </tbody></table>
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
            </td>
        </tr>
    </tbody>
    </table>
    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
    <tbody>
        <tr>
            <td class="esd-stripe" align="center">
                <table class="es-content-body" style="background-color: white;" width="600" cellspacing="0"
                    cellpadding="0" background-color="white" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-structure" align="left">
                                <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td class="esd-container-frame" width="600" valign="top"
                                                align="center">
                                                <table style="background-color:white" width="100%"
                                                    cellspacing="0" cellpadding="0" background-color="white">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-block-text es-m-txt-l es-p20t es-p15b es-p30r es-p30l"background-color="white" align="justify"><p style="text-align:justify">
																														Hi, `+ name + `</p>
                                                               <p style="text-align:justify">Click on the link to reset password. it will redirect you to danmunropt.com.</p>
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
                            <td class="esd-structure es-p20b es-p30r es-p30l" align="left">
                                <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td class="esd-container-frame" width="540" valign="top"
                                                align="center">
                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-block-button es-p40t es-p40b es-p10r es-p10l"align="center">
                                                            <span class="es-button-border">
																														<a href="`+ 'https://www.danmunropt.com/reset-password/' + emailToken + `" class="es-button" target="_blank">Click</a></span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p style="text-align:justify">
                                Thanks,<br/>
                                    Danmunropt team.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
    </table>

    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
    <tbody>
        <tr>
            <td class="esd-stripe" align="center">
                <table class="es-content-body" style="background-color: transparent;" width="600"
                    cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-structure" align="left">
                                <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td class="esd-container-frame" width="600" valign="top"
                                                align="center">
                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-block-spacer es-p10t es-p20b es-p20r es-p20l"align="center" style="font-size:0">    <tbody>        <tr>            <td                style="border-bottom: 1px solid #f4f4f4; background-color: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px;">            </td>        </tr>    </tbody></table>
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
            </td>
        </tr>
    </tbody>
    </table>
    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
    <tbody>
        <tr>
            <td class="esd-stripe" esd-custom-block-id="6341" align="center">
                <table class="es-content-body" style="background-color:white;" width="600" cellspacing="0"
                    cellpadding="0" background-color="white" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-structure" align="left">
                                <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                        <td class="esd-container-frame" width="600" valign="top"
                                        align="center">
                                        <table style=" border-collapse: separate;"
                                            cellspacing="0" cellpadding="0">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-block-text es-p30r es-p30l"
                                                        align="center">
                                                        <h3 style="color: #111111;padding-top:20px;">Need more help?
                                                        </h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-block-text es-p30b es-p30r es-p30l"
                                                        esdev-links-color="#01b39" align="center">
                                                       </td>    </p>    
                                                            </td>
                                                            <br />
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
            </td>


        </tr>
    </tbody>
    </table>
    <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
    <tbody>
        <tr>
            <td class="esd-stripe" esd-custom-block-id="6342" align="center">
                <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-structure es-p30t es-p30b es-p30r es-p30l" align="left">
                                <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td class="esd-container-frame" width="540" valign="top"
                                                align="center">
                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            </p>
                                            </td>
                                        </tr>
                                        <td class="esd-block-text es-p25t" align="center">
                                            <div style="line-height:1.2 ;">
                                                            <br/>
                                                <br><p style="font-size:12px;line-height:0.5px">
                                                © 2021, <a href="https://danmunropt.com"
                                                    style="margin-left: 4px; margin-right: 4px;">FlippingKoin</a>
                                                All Rights Reserved.</p>
                                            </div>

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
    </td>
    </tr>
    </tbody>
    </table>
    <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center">
    <tbody>
        <tr>
            <td class="esd-stripe" align="center">
                <table class="es-content-body" style="background-color: transparent;" width="600"
                    cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                <table width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td class="esd-container-frame" width="560" valign="top"
                                                align="center">
                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
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
            </td>
        </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </body>
        </html>`
    // "<div> <p>Click on this to verify your email.</p> <a href='https://www.flippingkoin.com/verify/"+emailToken+"'> con</a></div>"
};
