import React, { useEffect, useState } from 'react';

import confetti from './confetti';
import 'animate.css/animate.css';
import { Animated } from 'react-animated-css';

import codes from './promocodes';
import stores from './stores';
import configs from './configs';
import background from './images/background.jpg';
import offer from './images/offer.png';
import winLogo from './images/win.png';
import hero from './images/bunnings.png';
import bottomleftLogo from './images/flogo24.png';
import gardenaBrand from './images/gardena_brand.png';
import topleftlogo from './images/topleft_brand.png';
import gardenaMovie from './images/gardena-movie.png';
import playBtn from './images/play-btn.png';

import './App.scss';

const API = 'https://turnstylehost.com/promo_api.php';
const CLIENT = 'meyle'

let youtubePlayer;

const states = [
  'VIC',
  'NSW',
  'QLD',
  'TAS',
  'WA',
  'SA',
  'ACT'
]

function onPlayerReady(event) {
  event.target.playVideo();

  youtubePlayer = event.target;
}

const STEPS = {
  START: 'START',
  FULL_NAME: 'FULL_NAME',
  QUESTION_1: 'QUESTION_1',
  QUESTION_2: 'QUESTION_2',
  QUESTION_3: 'QUESTION_3',
  VIDEO: 'VIDEO',
  FINAL: 'FINAL',
  TERMS: 'TERMS',
};

function App() {
  const [step, setStep] = useState(STEPS.START);
  const [form, setForm] = useState({
    id: null,
    client: CLIENT,
    video_id: 'oRhpOtTJkPQ',
  });
  const [playing, setPlaying] = useState(false);
  const [promocodeError, setPromocodeError] = useState(null);

  const setValue = (field, val) => {
    setForm({
      ...form,
      [field]: val
    });
  }

  const saveData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    };
    
    fetch(API, requestOptions)
      .then(response => response.json())
      .then(data => { 
        if (data && data.message) {
          if (data.message.id) {
            setForm({
              ...form,
              id: data.message.id
            });
          }
        }
      });
  }

  const renderVideoPlayer = () => {
    // eslint-disable-next-line
    const player = new YT.Player('player', {
      width: '640',
      height: '390',
      videoId: form.video_id,
      playerVars: { rel: 0, showinfo: 0, ecver: 2, autoplay: 1, playsinline: 1 },
      events: {
        onReady: onPlayerReady,
        onStateChange: (event) => {
          if (event.data === 0) {
            setStep(STEPS.FINAL);
          }
        }
      }
    });
  };

  useEffect(() => {
    if (step === STEPS.VIDEO) {
      renderVideoPlayer()
    }

    if (step === STEPS.FINAL) {
      console.log('start');

      // eslint-disable-next-line
      confetti.start();

      setTimeout(() => {
        confetti.stop();
      }, 3000);
    }
  }, [step]);









  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <img src={bottomleftLogo} id="bottomleft-logo" alt="bottomleft" />
      <img src={gardenaBrand} id="gardena-brand" alt="Gardena" />
      <img src={topleftlogo} id="topleft-logo" alt="Meyle" />

      <div id="clever-watering">#HD20YRS</div>

      <div className="main-container">
        <div className="main-content">

          { step === STEPS.START && (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200} style={{height: '100%'}}>
              <div className="step-body">
        
              <h1>REDEEM YOUR FREE GIFT</h1>
              <h2>A wireless charger or <br></br> premium drink bottle.</h2>

               
               
               
                  <img src={offer} alt="offer" id="offer" />

               
               
                <div className="promocode">
                   
                    <div style={{float: 'right'}}>

                        <label for="promocode" className="form-label">Promo Code:</label>

                        <input type="text" className="form-control" id="promocode" maxlength="6" style={{ width: 120,fontWeight:300, }}
                         onChange={(e) => setValue('promocode', e.target.value)} />   <p className="promocode-error">
                         {promocodeError}  </p>
                      </div>
                  </div>


                  

                  

                </div>
              

              <button type="submit" id="terms-button" className="btn btn-secondary" onClick={() => {
                  setStep(STEPS.TERMS);
                }}>Terms</button>

              <div className="form-buttonstart">
                <button type="submit" className="btn btn-primary" onClick={() => {
                  if (form.promocode) {
                    const found = codes.find(item => item.toLowerCase() === form.promocode.toLowerCase());

                    if (found) {
                      setStep(STEPS.FULL_NAME);
                      setPromocodeError(null);
                      saveData();
                    } else {
                      setPromocodeError('Invalid promocode');
                    }
                  } else {
                    setPromocodeError('Enter your promocode');
                  }
                }}>Continue</button>
              </div>

            </Animated>
          )}

          { step === STEPS.TERMS && (
            <div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                <div className="step-body">
                  <p>
    <b></b>
</p>
<p>
    <b></b>
</p>
<p>
    <b>THE MEYLE STORY - TRADE ENGAGEMENT LIMITED OFFER 2023</b>
</p>
<p>
    <a name="_Toc139791117"></a><a name="_Toc145319087"><b>TERMS AND CONDITIONS</b></a><b></b>
    <b></b>
</p>
<p>
    1.              Information on how to participate in the exclusive offer
    forms part of these Terms and Conditions. Participation in this offer is
    deemed acceptance of these Terms and Conditions.
</p>
<p>
    2.              Entry is only open to
    <b>
        <i><u>Invited Automotive Workshop Businesses</u></i>
    </b>
    throughout Australia (“<b>Eligible Business</b>”).
</p>
<p>
    3.              This is a limited offer, chance does not play any role in
    determining a winner and is limited to the first twelve hundred (1200)
    successful participants.
</p>
<p>
    4.              We encourage all eligible participants to redeem as soon as
    possible.
</p>
<p>
    5.              Employees (and their immediate families) of the Promoter,
    Meyle distributors, automotive resellers and agencies associated with this
    offer are ineligible to enter. Immediate family means any of the following:
    spouse, ex-spouse, de-facto spouse, child or step-child (whether natural or
    by adoption), parent, step-parent, grandparent, step-grandparent, uncle,
    aunt, niece, nephew, brother, sister, step-brother, step-sister or 1
    <sup>
        st
    </sup>
    cousin.
</p>
<p>
    6.              The exclusive offer commences at 8:00am (AEST) on 1/10/2023
    and<b></b>closes at 5.00pm (AEDT) on 31/12/2023 <b>(“Offer Period</b>”). All
    exclusive offer claims must be received by 5:00pm (AEDT) on 31/12/2023.
</p>
<p>
    7.              To be eligible, an authorised representative of an Eligible
    Business must receive one (1) ‘Meyle Story 2023’ promotional entry card
    featuring a unique code from Meyle by way of a distributor sales
    professional either in person or via mail, during the Offer Period.
</p>
<p>
    <b>8.</b>To redeem the exclusive of: <b></b>
</p>
<p>
    <b>a.</b>the authorised representative of an Eligible Business during the
    promotional period must visit the website accessed via the QR code printed
    upon the promotional entry card. <b>(the “Website”)</b>
</p>
<p>
    <b>b.</b>fully complete the online registration form and complete all
    requested personal and business information details <b></b>
</p>
<p>
    <b>c.</b>view short Meyle Story video <b></b>
</p>
<p>
    <b>d.</b>choose which gift they would prefer. <b></b>
</p>
<p>
    <b>e.</b>ensure correct form submission. <b></b>
</p>
<p>
    <b></b>
</p>
<p>
    9.              Entries are deemed to be received at the time of receipt
    into the exclusive offer database and NOT at the time of transmission by the
    authorised representative of an Eligible Business.
</p>
<p>
    10.           Each authorised representative of an Eligible Business will be
    notified by return email informing them of their offer redemption
    completion.
</p>
<p>
    11.           The Promoter reserves the right, at any time, to verify the
    validity of entries, Eligible Businesses and their authorised
    representatives (including an Eligible Business’ place of business and an
    authorised representative’s identity, place of residence and place of
    employment) and to disqualify any Eligible Business whose authorised
    representative submits an entry that is not in accordance with these Terms
    and Conditions or who tampers with the entry. Errors and omissions may be
    accepted at the Promoter's discretion. Failure by the Promoter to enforce
    any of its rights at any stage does not constitute a waiver of those rights.
</p>
<p>
    12.           Incomplete or indecipherable<b></b>entries will be deemed
    invalid.
</p>
<p>
    13.           One entry per Eligible Business permitted, subject to the
    following:
</p>
<p>
    a.     only one (1) unique code per entry is permitted;
</p>
<p>
    b.     the same unique code cannot be used more than once; and
</p>
<p>
    c.     unrecognised codes will be deemed invalid.
</p>
<p>
    14.           The Meyle Story 2023 campaign invitations (entry cards) cannot
    be shared, transferred, sold or traded. The offer can only be redeemed by
    the addressed business printed upon the front face of the card, any
    submission which does not align with the addressed business, the submission
    will be forfeited, and card number cancelled.
</p>
<p>
    15.           All subsequent claims utilising a previous used unique
    promotion code will not be honoured and each entry will be deleted.
</p>
<p>
    16.           Eligible Businesses must retain a copy of their original
    ‘Meyle Story campaign invitations’ clearly showing the unique code used to
    enter, as their proof of participation.
</p>
<p>
    <a name="_Toc139791136"></a>
    <a name="_Toc145319106">
        17.           If there is a dispute as to the identity of an Eligible
        Business or its authorised representative, the Promoter reserves the
        right, in its sole discretion, to determine the identity of the Eligible
        Business or its authorised representative.
    </a>
</p>
<p>
    18.           An eligible participant will be entitle to claim 1 of 2
    different prize/gifts:
</p>
<p>
    a.     six hundred (600) Camelbak Chute Mag drink bottles each valued at $35
    AUD incl. GST.
</p>
<p>
    b.     six hundred (600) Boost Wireless Device Charging Station each valued
    at $35 AUD incl. GST
</p>
<p>
    19.           This is a limited offer and will be limited to the first 1200
    successful claims, if your choice is not available your prize will be
    substituted.
</p>
<p>
    20.           If any exclusive offer (or part of any exclusive offer) is
    unavailable, the Promoter, in its discretion, reserves the right to
    substitute the exclusive offer (or part of the exclusive offer) with an
    exclusive offer to the equal value and/or specification, subject to any
    written directions from a regulatory authority.
</p>
<p>
    21.           By accepting the exclusive offer, the authorised
    representative of the participating business agrees to participate in and
    co-operate as required with all reasonable media editorial requests relating
    to the exclusive offer, including but not limited to, being interviewed and
    photographed, filmed and/or chaperoned.
</p>
<p>
    22.           Exclusive offer values are based upon the recommended retail
    prices at the time of printing (inclusive of GST). The Promoter accepts no
    responsibility for change in the exclusive offer value between the date of
    printing and the ultimate exclusive offer date.
</p>
<p>
    23.           The exclusive offer will be awarded to the authorised
    representative of the respective business as provided in the entry process.
</p>
<p>
    24.           If for any reason the business does not redeem the exclusive
    offer, then the exclusive offer will be forfeited.
</p>
<p>
    25.           Total exclusive offer value is $42,000 incl. GST. <b></b>
</p>
<p>
    26.           The Promoter’s decision is final, and no correspondence will
    be entered into.
</p>
<p>
    27.           Exclusive offers are not transferable or exchangeable and
    cannot be taken as cash.
</p>
<p>
    28.           Authorised representatives of Eligible Businesses consent to
    the Promoter using the business’ name, likeness and/or image in the event
    they are the authorised business (including photograph, film and/or
    recording of the same) in any media for an unlimited period, without
    remuneration, for the purpose of promoting this offer (including any
    outcome), and promoting any products manufactured, distributed and/or
    supplied by the Promoter.
</p>
<p>
    29.           If this exclusive offer is interfered with in any way or is
    not capable of being conducted as reasonably anticipated due to any reason
    beyond the reasonable control of the Promoter, including but not limited to
    technical difficulties, unauthorised intervention or fraud, the Promoter
    reserves the right, in its sole discretion, to the fullest extent permitted
    by law (a) to disqualify any Eligible Businesses and/or its authorised
    representative; or (b) subject to any written directions from a regulatory
    authority, to modify, suspend, terminate or cancel the offer, as
    appropriate.
</p>
<p>
    30.           The use of any automated entry software or any other
    mechanical or electronic means that allows an authorised representative of
    an Eligible Business to automatically enter repeatedly is prohibited and
    will render all entries submitted by that Eligible Business invalid.
</p>
<p>
    31.           Unless otherwise due to fraud or ineligibility under these
    Terms and Conditions, all exclusive offer claims in excess of the advertised
    exclusive offer pool will be honoured. Any exclusive offers that are part of
    the advertised total exclusive offer pool will be awarded.
</p>
<p>
    32.           Printing and other quality control errors will not invalidate
    an otherwise valid exclusive offer claim. Exclusive offer materials void if
    stolen, forged, mutilated or tampered with in any way.
</p>
<p>
    33.           There will be a total of 1200 exclusive invitations (game
    cards) printed for this exclusive offer.
</p>
<p>
    34.     Nothing in these Terms and Conditions limits, excludes or modifies
    or purports to limit, exclude or modify
    <strong>
        the statutory consumer guarantees as provided under the Competition and
        Consumer Act, as well as any other implied warranties under the ASIC Act
        or similar consumer protection laws
    </strong>
    in the States and Territories of Australia (“Non-Excludable Guarantees”).
    Except for any liability that cannot by law be excluded, including the
    Non-Excludable Guarantees, the Promoter (including its respective officers,
    employees and agents) excludes all liability (including negligence), for any
    personal injury; or any loss or damage (including loss of opportunity);
    whether direct, indirect, special or consequential, arising in any way out
    of the offer.
</p>
<p>
    35.           Except for any liability that cannot by law be excluded,
    including the Non-Excludable Guarantees, the Promoter (including its
    respective officers, employees and agents) is not responsible for and
    excludes all liability (including negligence), for any personal injury; or
    any loss or damage (including loss of opportunity); whether direct,
    indirect, special or consequential, arising in any way out of: (a) any
    technical difficulties or equipment malfunction (whether or not under the
    Promoter’s control); (b) any theft, unauthorised access or third party
    interference; (c) any entry or exclusive offer claim that is late, lost,
    altered, damaged or misdirected (whether or not after their receipt by the
    Promoter) due to any reason beyond the reasonable control of the Promoter;
    (d) any tax liability incurred by a winning business or Eligible Business
    (or its authorised representative); or (e) use/taking of a exclusive offer.
    <a name="_Toc145319213"></a>
</p>
<p>
    36.           As a condition of accepting an exclusive offer, each
    authorised representative of a participating workshop must sign any legal
    documentation as and in the form required by the Promoter and/or exclusive
    offer suppliers in their absolute discretion, including but not limited to a
    legal release and indemnity form.
</p>
<p>
    37.           The Promoter collects personal information of authorised
    representatives of Eligible Businesses in order to conduct the exclusive
    offer and may, for this purpose, disclose such information to third parties,
    including but not limited to agents, contractors, service providers,
    exclusive offer suppliers and, as required, to Australian regulatory
    authorities. All personal information will be handled by the Promoter in
    accordance with its Privacy Policy which can be found at
    https://www.meyle.com/en/data-privacy/. Entry is conditional on providing
    this information. The Promoter may, for an indefinite period, unless
    otherwise advised, use the information for promotional, marketing,
    publicity, research and profiling purposes, including sending electronic
    messages or telephoning the Eligible Business and/or its authorised
    representative. Authorised representatives of Eligible Businesses should
    direct any request to opt out, access, update or correct information to the
    Promoter. All entries become the property of the Promoter
</p>
<p>
    38.          This campaign is being administered by Flow Marketing Pty Ltd
    121/87 Turner St Port Melbourne VIC 3207 Australia ABN 85808793145 on behalf
    of MEYLE AG Merkurring 111 22143 Hamburg Germany Phone: +49-40-6750-6510
    <a href="https://www.meyle.com/" target="_blank">
        www.meyle.com
    </a>
</p>

							
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    setStep(STEPS.START);
                  }}>BACK</button>
                </div>

              </Animated>
            </div>
          )}

          { step === STEPS.FULL_NAME && (
            <div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                <div className="step-body">
                  <form>
                    <div className="mb-3">
                      <label for="full_name_field" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="full_name_field" onChange={(e) => {
                          let newData = {
                            ...form,
                            full_name: '',
                            first_name: '',
                            last_name: ''
                          };

                        if (e.target.value) {
                          const fullName = e.target.value;
                          const names = e.target.value.split(' ');

                          newData.full_name = fullName;
                          newData.first_name = names[0];

                          if (names.length > 1) {
                            newData.last_name = names[1];
                          }
                        }

                        setForm(newData);
                      }} />



                    </div>

 <div className="mb-3">
                      <label for="wname" className="form-label">Workshop Name</label>
                      <input type="wname" className="form-control" id="wname" onChange={e => setValue('wname', e.target.value)}></input>

                     
                      <label for="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" />

                      <label for="delivery" className="form-label">Delivery Address</label>
                      <input type="text" className="form-control" id="delivery" />
                      
                    </div>
                    

                    <div class="form-row">
                    <div className="form-group col-md-6">
                      <label for="city" className="form-label">Suburb</label>
                      <input type="text" className="form-control" id="suburb" />
                    </div> 
                    </div> 
                    <div class="row">

                    <div className="form-group col-md-4">
                      <label for="postcode" className="form-label">Postcode</label>
                      <input type="text" className="form-control" id="postcode" />
                    </div> 


                    <div className="form-group col-md-4">
                      <label for="state" className="form-label">State</label>
                      <input type="text" className="form-control" id="state" />
                    </div> 

                    
                    </div>
                   
                  </form>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    saveData();
                    setStep(STEPS.QUESTION_1);
                  }}>Continue</button>
                </div>

              </Animated>
            </div>
          )}

          { step === STEPS.QUESTION_1 && (
            <div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="step-body">
                  <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                  <h2 className="personalised">
                      <span className="capitalised">{form.first_name}</span> 
                    </h2>
                    <h4 className="question">Question 1</h4>
                  </Animated>
                  <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <p className="h4">How often do you work on European models? (i.e. Audi,BMW,VW etc.)</p>
                  </Animated>
                  <br />

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={600}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="department" id="Regularly" onClick={() => setValue('department', 'Regularly')} />
                      <label className="form-check-label" for="Regularly">
                      Regularly 
                      </label>
                    </div>
                  </Animated>

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={800}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="department" id="Occasionally" onClick={() => setValue('department', 'Occasionally')} />
                      <label className="form-check-label" for="Occasionally">
                        Occasionally
                      </label>
                    </div>
                  </Animated>

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="department" id="Rarely" onClick={() => setValue('department', 'Rarely')} />
                      <label className="form-check-label" for="Rarely">
                        Rarely
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1200}>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="department" id="Never" onClick={() => setValue('department', 'Never')} />
                      <label className="form-check-label" for="Never">
                        Never
                      </label>
                  
                    </div>
                  </Animated>
                  


                  

                  { form.department === 'other' && (
                    <div className="mb-3">
                      <label for="department" className="form-label">Specify</label>
                      <input type="text" className="form-control" id="department" />
                    </div>
                  )}
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn btn-light" onClick={() => {
                    setStep(STEPS.FULL_NAME);
                  }}>Previous</button>
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    setStep(STEPS.QUESTION_2);
                    saveData();
                  }}>Continue</button>
                </div>
              </Animated>
            </div>
          )}

          { step === STEPS.QUESTION_2 && (
            <div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="step-body">
                  <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <h2 className="personalised">
                      <span className="capitalised">{form.first_name}</span> 
                    </h2>
                    <h4 className="question">Question 2</h4>
                  </Animated>
                  <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <p className="h4">Does you workshop have a specific focus?</p>
                  </Animated>
                  <br />
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={800}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="howlong" id="4WD / Offroad / Touring" onClick={() => setValue('howlong', '4WD / Offroad / Touring')} />
                      <label className="form-check-label" for="4WD / Offroad / Touring">
                        4WD / Offroad / Touring
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="howlong" id="European" onClick={() => {
                        setForm({
                          ...form,
                          howlong: 'European',
                          video_id: 'oRhpOtTJkPQ'
                        });
                      }} />
                      <label className="form-check-label" for="radiohowlong">
                       European
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="howlong" id="Performance" onClick={() => {
                        setForm({
                          ...form,
                          howlong: 'Performance',
                          video_id: 'oRhpOtTJkPQ'
                        });
                      }} />
                      <label className="form-check-label" for="radiohowlong">
                       Performance
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1200}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="howlong" id="General (no specific focus)" onClick={() => {
                        setForm({
                          ...form,
                          howlong: 'General (no specific focus)',
                          video_id: 'dNOxiQaJpyA'
                        });
                        
                      }} />
                      <label className="form-check-label" for="radiohowlong">
                       General (no specific focus)
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1400}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="howlong" id="Commercial / Fleet" onClick={() => setValue('howlong', 'Commercial / Fleet')} />
                      <label className="form-check-label" for="Commercial / Fleet">
                        Commercial / Fleet
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1400}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="howlong" id="Other" onClick={() => setValue('howlong', 'Other')} />
                      <label className="form-check-label" for="Other">
                        Other
                      </label>
                    </div>
                  </Animated>
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn btn-light" onClick={() => {
                    setStep(STEPS.QUESTION_1);
                  }}>Previous</button>
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    setStep(STEPS.QUESTION_3);
                    saveData();
                  }}>Continue</button>
                </div>
              </Animated>
            </div>
          )}

          { step === STEPS.QUESTION_3 && (
            <div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="step-body">
                  <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <h2 className="personalised">
                      <span className="capitalised">{form.first_name}</span> 
                    </h2>
                    <h4 className="quesion">Question 3</h4>
                  </Animated>
                  <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <p className="h4">How often do you purchase brake, steering or suspension parts from the OE Dealer?</p>
                  </Animated>
                  <br />

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={800}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="Regularly" onClick={() => setValue('rating', 'Regularly')} />
                      <label className="form-check-label" for="Regularly">
                        Regularly
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="Occasionally" onClick={() => setValue('rating', 'Occasionally')} />
                      <label className="form-check-label" for="Occasionally">
                        Occasionally
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1200}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="Rarely" onClick={() => setValue('rating', 'Rarely')} />
                      <label className="form-check-label" for="Rarely">
                       Rarely
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1400}>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="rating" id="Neverr" onClick={() => setValue('rating', 'Never')} />
                      <label className="form-check-label" for="Never">
                        Never
                      </label>
                    </div>
                  </Animated>
                  
                </div>




                <div className="form-buttons">
                  <button type="button" className="btn btn-light" onClick={() => {
                    setStep(STEPS.QUESTION_2);
                  }}>Previous</button>
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    setStep(STEPS.VIDEO);
                    saveData();
                  }}>Continue</button>
                </div>
              </Animated>
            </div>
          )}

          { step === STEPS.VIDEO && (
            <div style={{ paddingTop: 5 }}>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="step-body">
                  <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <h4 className="h6">{form.first_name}, - Please Watch Video to complete activity</h4>
                  
                  </Animated>
                  <div className="player-container">
                    { !playing && (
                      <div className="player-pic" style={{backgroundImage: `url(${gardenaMovie})`}}>
                        <div className="play-btn" onClick={() => { youtubePlayer.playVideo(); setPlaying(true); }}>
                          <img src={playBtn} alt="Play" />
                        </div>
                      </div>

                    )}

                    <div id="player"></div>
                  </div>
                  <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                  <h4 className="h6"> This video content is based on responses: <ul><li>Euro Model Service - {form.department} </li><li>Specialty - {form.howlong} </li> <li>OE Supply - {form.rating}</li></ul></h4>
                  </Animated>
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn btn-light" onClick={() => {
                    setStep(STEPS.QUESTION_3);
                  }}>Previous</button>
                  <button type="button" disabled className="btn btn-primary">Continue</button>
                </div>
              </Animated>
            </div>
          )}

          { step === STEPS.FINAL && (
             
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} style={{height: '100%'}}>
              <div className="step-body" style={{height: '100%'}}>
                


                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                <h4 className="h4">Thank You for learning more about Meyle, <br></br> {form.first_name}.</h4>
                <p className="message">Please choose a gift, whilst stocks last. </p>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gift" id="charger" onClick={() => setValue('gift', 'charger')} />
                      <label className="form-check-label" for="charger">
                        Wireless Charger
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1200}>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="gift" id="bottle" onClick={() => setValue('gift', 'bottle')} />
                      <label className="form-check-label" for="bottle">
                      Premium Drink Bottle
                      </label>
                  
                    </div>
                  </Animated>

          
                    


                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200} style={{height: '10%'}}>
                  <div className="centered" style={{ justifyContent: 'flex-start' }}>
                    <img src={offer} alt="Win" id="win-logo" style={{ maxWidth: '600px', marginBottom: 0 }} />

                  

                  </div>
                </Animated>
                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    setStep(STEPS.START);
                    setForm({});
                    setPlaying(false);
                  }}>Submit</button>
                </div>
              </div>
            </Animated>
          )}
          
        </div>
        
      </div>
    </div>
  );
  
}

export default App;
