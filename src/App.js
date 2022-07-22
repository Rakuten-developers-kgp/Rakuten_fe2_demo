import React, { useState } from 'react';
import AppTest2 from './AppTest2';
import './main.css';

function App() {


  const [inputMust, setInputMust] = useState([
    {
      parameter: "",
      value: ""
    }
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...inputMust];
    list[index][name] = value;
    setInputMust(list);
  }

  const handleAddInput = () => {
    setInputMust([...inputMust, { parameter: "", value: "" }]);
  }

  const handleRemoveInput = index => {
    const list = [...inputMust];
    list.splice(index, 1);
    setInputMust(list);
  }


  // for should

  const [inputShould, setInputShould] = useState([
    {
      parameter: "",
      value: "",
    }
  ]);

  const handleChange2 = (e, index) => {
    const { name, value } = e.target;

    const list = [...inputShould];
    list[index][name] = value;
    setInputShould(list);
  }

  const handleAddInput2 = () => {
    setInputShould([...inputShould, { parameter: "", value: "" }]);
  }

  const handleRemoveInput2 = index => {
    const list = [...inputShould];
    list.splice(index, 1);
    setInputShould(list);
  }


  // for Not

  const [inputNot, setInputNot] = useState([
    {
      parameter: "",
      value: "",
    }
  ]);

  const handleChange3 = (e, index) => {
    const { name, value } = e.target;

    const list = [...inputNot];
    list[index][name] = value;
    setInputNot(list);
  }

  const handleAddInput3 = () => {
    setInputNot([...inputNot, { parameter: "", value: "" }]);
  }

  const handleRemoveInput3 = index => {
    const list = [...inputNot];
    list.splice(index, 1);
    setInputNot(list);
  }


  return (
    <div className="App">



      <br />
      <br />
      <br />
      <center>
        <AppTest2 />
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <div className='main'>
        <div className='col1'>
          <div className='c1r1'>
            <center>
              <label className='head2'>Must</label>
            </center>

            {inputMust.map((item, i) => {
              return (
                <div key={i} >
                  <div className='must-div'>

                    <div className='must1'>
                      <input
                        type="text"
                        className='must-key'
                        id="lname"
                        placeholder='Parameter'
                        name="parameter"
                        value={item.parameter}
                        onChange={e => handleChange(e, i)}
                      />
                    </div>

                    <div className='must2'>
                      <input
                        className='must-key'
                        type="text"
                        id="lname"
                        placeholder='Value'
                        name="value"
                        value={item.value}
                        onChange={e => handleChange(e, i)}
                      />
                    </div>
                  </div>

                  {inputMust.length !== 1 && <input
                    type="button"
                    value="-"
                    className='add-rule-btn'
                    onClick={() => handleRemoveInput(i)}
                  />}

                  {inputMust.length - 1 === i && <input
                    type="button"
                    value="+"
                    className='rem-rule-btn'
                    onClick={handleAddInput}
                  />}

                </div>
              )
            }
            )}


          </div>

          <br />

          <div className='c1r1'>
            <center>
              <label className='head2'>Should</label>
            </center>
            {inputShould.map((item, i) => {
              return (
                <div key={i} >
                  <div className='must-div'>

                    <div className='must1'>
                      <input
                        type="text"
                        className='must-key'
                        id="lname"
                        placeholder='Parameter'
                        name="parameter"
                        value={item.parameter}
                        onChange={e => handleChange2(e, i)}
                      />
                    </div>

                    <div className='must2'>
                      <input
                        className='must-key'
                        type="text"
                        id="lname"
                        placeholder='Value'
                        name="value"
                        value={item.value}
                        onChange={e => handleChange2(e, i)}
                      />
                    </div>
                  </div>

                  {inputShould.length !== 1 && <input
                    type="button"
                    value="-"
                    className='add-rule-btn'
                    onClick={() => handleRemoveInput2(i)}
                  />}

                  {inputShould.length - 1 === i && <input
                    type="button"
                    value="+"
                    className='rem-rule-btn'
                    onClick={handleAddInput2}
                  />}

                </div>
              )
            }
            )}

          </div>

          <br />

          <div className='c1r1'>
            <center>
              <label className='head2'>Not</label>
            </center>

            {inputNot.map((item, i) => {
              return (
                <div key={i} >
                  <div className='must-div'>

                    <div className='must1'>
                      <input
                        type="text"
                        className='must-key'
                        id="lname"
                        placeholder='Parameter'
                        name="parameter"
                        value={item.parameter}
                        onChange={e => handleChange3(e, i)}
                      />
                    </div>

                    <div className='must2'>
                      <input
                        className='must-key'
                        type="text"
                        id="lname"
                        placeholder='Value'
                        name="value"
                        value={item.value}
                        onChange={e => handleChange3(e, i)}
                      />
                    </div>
                  </div>

                  {inputNot.length !== 1 && <input
                    type="button"
                    value="-"
                    className='add-rule-btn'
                    onClick={() => handleRemoveInput3(i)}
                  />}

                  {inputNot.length - 1 === i && <input
                    type="button"
                    value="+"
                    className='rem-rule-btn'
                    onClick={handleAddInput3}
                  />}

                </div>
              )
            }
            )}

          </div>

          <br />

          <div className='c1r1'>
            <center>
              <label className='head2'>Filter</label>
            </center>
            <div className='must-div'>
              <div className='must1'>
                <input className='must-key' type="text" id="lname" placeholder='Parameter' name="lname" />
              </div>
              <div className='must2'>
                <input className='must-key' type="text" id="lname" placeholder='Value' name="lname" />
              </div>
            </div>
          </div>
          <br />
          <center>
            <button class="button button5">Submit</button>
          </center>

        </div>
        <div className='col2'>
          <label for="lname">Results:</label>
          <br />

          <div className='c2r3'>
            <i> Results will be displayed here</i>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
