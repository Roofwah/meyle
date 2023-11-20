import React, { useEffect, useState } from 'react';

import confetti from './confetti';
import 'animate.css/animate.css';
import { Animated } from 'react-animated-css';

import codes from './promocodes';
import stores from './stores';
import configs from './configs';
import background from './images/background.jpg';
import gardenaLogo from './images/gardena.png';

import './App.scss';

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
}

const STEPS = {
  START: 'START',
  FULL_NAME: 'FULL_NAME',
  QUESTION_1: 'QUESTION_1',
  QUESTION_2: 'QUESTION_2',
  QUESTION_3: 'QUESTION_3',
  VIDEO: 'VIDEO',
  FINAL: 'FINAL',
};

function App() {
  const [step, setStep] = useState(STEPS.START);
  const [form, setForm] = useState({});
  const [promocodeError, setPromocodeError] = useState(null);

  const setValue = (field, val) => {
    setForm({
      ...form,
      [field]: val
    });
  }

  const renderVideoPlayer = () => {
    // eslint-disable-next-line
    const player = new YT.Player('player', {
      width: '640',
      height: '390',
      videoId: 'Smn2UPjxu4s',
      playerVars: {rel: 0, showinfo: 0, ecver: 2, autoplay: 1},
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
      <div className="main-container">
        <div className="main-content">
          {/* <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <h1 class="display-5" style={{ paddingBottom: 30 }}>Watch 2 Win!</h1>
          </Animated> */}

          { step === STEPS.START && (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200} style={{height: '100%'}}>
              <div className="step-body">
                <div className="centered">
                  <img src={gardenaLogo} alt="Gardena" />

                  <div className="promocode">
                    <div style={{ margin: '0px auto', textAlign: 'center' }}>
                        <label for="promocode" className="form-label">Promocode</label>
                        <input type="text" className="form-control" id="promocode" maxlength="4" style={{ width: 100, fontSize: '2rem', margin: '0px auto' }}
                         onChange={(e) => setValue('promocode', e.target.value)} />
                      </div>
                  </div>

                  <p className="promocode-error">{promocodeError}</p>
                </div>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-primary" onClick={() => {
                  if (form.promocode) {
                    const found = codes.find(item => item.toLowerCase() === form.promocode.toLowerCase());

                    if (found) {
                      setStep(STEPS.FULL_NAME);
                      setPromocodeError(null);
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


          { step === STEPS.FULL_NAME && (
            <div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                <div className="step-body">
                  <form>
                    <div className="mb-3">
                      <label for="full_name" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="full_name" />
                    </div>

                    <div className="mb-3">
                      <label for="state" className="form-label">State</label>
                      <select class="form-select" aria-label="State" id="state" onChange={(e) => setValue('state', e.target.value)}>
                        {
                          states.map(state => {
                            return (
                              <option value={state}>{state}</option>
                            )
                          })
                        }
                      </select>
                    </div>

                    <div className="mb-3">
                      <label for="store" className="form-label">Select your Bunnings store:</label>
                      <select class="form-select" aria-label="Select store" id="store">
                        <option selected>Select</option>
                        {
                          stores
                            .filter(item => item.type === configs.storeType)
                            .filter((storeItem) => {
                              if (!form.state) return true;

                              return storeItem.state === form.state;
                            })
                            .map(store => {
                            return (
                              <option value={`${store.type} - ${store.suburb}`}>{`${store.type} - ${store.suburb}`}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    {/* <div className="mb-3">
                      <label for="email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                      <label for="phone" className="form-label">Phone Number</label>
                      <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                      <label for="postcode" className="form-label">Postcode</label>
                      <input type="text" className="form-control" id="postcode" />
                    </div> */}
                  </form>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary" onClick={() => {
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
                    <h4 className="h6">Question 1</h4>
                  </Animated>
                  <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <p className="h4">Which department do you primarily work in?</p>
                  </Animated>
                  <br />

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={600}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="department" id="garden" onClick={() => setValue('department', 'garden')} />
                      <label class="form-check-label" for="garden">
                      Garden
                      </label>
                    </div>
                  </Animated>

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={800}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="department" id="watering" onClick={() => setValue('department', 'watering')} />
                      <label class="form-check-label" for="watering">
                        Watering
                      </label>
                    </div>
                  </Animated>

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="department" id="powerGarden" onClick={() => setValue('department', 'power garden')} />
                      <label class="form-check-label" for="powerGarden">
                        Power Garden
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1200}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="department" id="radioHardware" onClick={() => setValue('department', 'hardware')} />
                      <label class="form-check-label" for="radioHardware">
                        Hardware
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1400}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="department" id="radioTools" onClick={() => setValue('department', 'tools')} />
                      <label class="form-check-label" for="radioTools">
                        Tools
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1600}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="department" id="flexRadioDefault2" onClick={() => setValue('department', 'other')} />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Other
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
                    <h4 className="h6">Question 2</h4>
                  </Animated>
                  <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <p className="h4">How long have you been a Bunnings Team Member?</p>
                  </Animated>
                  <br />
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={800}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="howlong" id="1year" onClick={() => setValue('howlong', 'less than 1')} />
                      <label class="form-check-label" for="1year">
                        Less than 1 Year
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="howlong" id="1-3year" onClick={() => setValue('howlong', '1-3 years')} />
                      <label class="form-check-label" for="1-3year">
                        1-3 Years
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1200}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="howlong" id="4-6year" onClick={() => setValue('howlong', '4-6 years')} />
                      <label class="form-check-label" for="4-6year">
                        4-6 Years
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1400}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="howlong" id="7-10years" onClick={() => setValue('howlong', '7-10 years')} />
                      <label class="form-check-label" for="7-10years">
                        7-10 Years
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1600}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="howlong" id="10years" onClick={() => setValue('howlong', '10 years')} />
                      <label class="form-check-label" for="10years">
                        10+ Years
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
                    <h4 className="h6">Question 3</h4>
                  </Animated>
                  <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <p className="h4">Please rate your interest in gardening.</p>
                  </Animated>
                  <br />

                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={800}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="Very Little" onClick={() => setValue('rating', 'Very Little')} />
                      <label class="form-check-label" for="Very Little">
                        Very Little
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1000}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="Some" onClick={() => setValue('rating', 'Some')} />
                      <label class="form-check-label" for="Some">
                        Some
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1200}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="Occasional" onClick={() => setValue('rating', 'Occasional')} />
                      <label class="form-check-label" for="Occasional">
                        Occasional
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1400}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="Regular" onClick={() => setValue('rating', 'Regular')} />
                      <label class="form-check-label" for="Regular">
                        Regular
                      </label>
                    </div>
                  </Animated>
                  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1600}>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="Passionate" onClick={() => setValue('rating', 'Passionate')} />
                      <label class="form-check-label" for="Passionate">
                        Passionate 
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
                  }}>Continue</button>
                </div>
              </Animated>
            </div>
          )}

          { step === STEPS.VIDEO && (
            <div>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className="step-body">
                  <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDelay={200}>
                    <h4 className="h6">Please Watch Video to Complete</h4>
                    
                  </Animated>
                  <div id="player"></div>
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
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={200} style={{height: '100%'}}>
                  <div className="centered">
                    <h4 className="h4">Thank You for your time.</h4>
                    <p className="h5" style={{textAlign: 'center'}}> Your store will now share in over $25,000 in cash for it's chosen charity.</p>
                  </div>
                </Animated>
              </div>
            </Animated>
      

          )}
          
        </div>
        
      </div>
    </div>
  );
  
}

export default App;
