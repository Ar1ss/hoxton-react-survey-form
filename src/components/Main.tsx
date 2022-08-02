import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);



  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
      <AnswersList answersList={[
        {
          username: "Anon",
          email: "",
          logo: 0,
          colour: 0,
          consistency: 0,
          timeSpent: [],
          review: "",
          bestFeatures: [],
          worstFeatures: []
        }
      ]}/>
      </section>
      <section className="main__form">
        <form className="form" onSubmit={event=>{
          event.preventDefault();
        }}>

          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>What would you say that are the best features of your rubber duck?</h3>

          <ul className="features-list">
            <li>
              <label>
                <input type="checkbox" name="features" value='color' />
                <span>I'ts yellow!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features"
                  value='sueaks' />
                <span>It squeaks!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features"
                  value='logo' />
                <span>It has logo!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features"
                  value='size' />
                <span>I'ts big!</span>
              </label>
            </li>
          </ul>

          <h3>What would you say that are the worst features of your rubber duck?</h3>

          <ul className="features-list">
            <li>
              <label>
                <input type="checkbox" name="worst-bits" value='color' />
                <span>I'ts yellow!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worst-bits"
                  value='sueaks' />
                <span>It squeaks!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worst-bits"
                  value='logo' />
                <span>It has logo!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worst-bits"
                  value='size' />
                <span>I'ts big!</span>
              </label>
            </li>
          </ul>


          <h3>How do you rate your rubber duck cconsistency?</h3>

          <ul className="form__group radio">
            <li>
              <input id="consistency-1" type='radio' name="consistency" />
              <label htmlFor="consistency-1">1</label>
            </li>
            <li>
              <input id="consistency-2" type='radio' name="consistency" />
              <label htmlFor="consistency-2">2</label>
            </li>
            <li>
              <input id="consistency-3" type='radio' name="consistency" />
              <label htmlFor="consistency-3">3</label>
            </li>
            <li>
              <input id="consistency-4" type='radio' name="consistency" />
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>

          <h3>How do you rate tour rubber duck color?</h3>

          <ul className="form__group radio">
            <li>
              <input id="color-1" type='radio' name="color" />
              <label htmlFor="color-1">1</label>
            </li>
            <li>
              <input id="color-2" type='radio' name="color" />
              <label htmlFor="color-2">2</label>
            </li>
            <li>
              <input id="color-3" type='radio' name="color" />
              <label htmlFor="color-3">3</label>
            </li>
            <li>
              <input id="color-4" type='radio' name="color" />
              <label htmlFor="color-4">4</label>
            </li>
          </ul>
          

          <h3>How do you rate tour rubber duck logo?</h3>

          <ul className="form__group radio">
            <li>
              <input id="rate-1" type='radio' name="rate" />
              <label htmlFor="rate-1">1</label>
            </li>
            <li>
              <input id="rate-2" type='radio' name="rate" />
              <label htmlFor="rate-2">2</label>
            </li>
            <li>
              <input id="rate-3" type='radio' name="rate" />
              <label htmlFor="rate-3">3</label>
            </li>
            <li>
              <input id="rate-4" type='radio' name="rate" />
              <label htmlFor="rate-4">4</label>
            </li>
          </ul>

          <h3>How do you like to spend time with your rubber duck?</h3>

          <ul className="features-list">
            <li>
              <label>
                <input type="checkbox" name="spend-time"
                 value='swim' />
                <span>Swiming</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="spend-time"
                  value='bath' />
                <span>Bathing</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="spend-time"
                  value='chat' />
                <span>Chating</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="spend-time"
                  value='no' />
                <span>I don't like to spend time with it</span>
              </label>
            </li>
          </ul>


          <p>What else have you got to say about your rubber duck?</p>  
          <textarea name="extra" id="eztra-stuf" cols="30" rows="5"></textarea>

          <p>Put your name here (if you feel like it)</p>
          <input type="text" name="" id="" />

          <p>Leave us your email please?</p>
          <input type="text" name="" id="" />

          <button className="form__submit">Submit Survery!</button>

        </form>
      </section>
    </main>
  );
}

export default Main;
