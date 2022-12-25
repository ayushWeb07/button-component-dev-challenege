import './App.css'
import Button from "./Button"

function App() {

  // Button component's properties-
  // hover: true, focus: true,
  // variant,
  // disableShadow: true,
  // disabled: true,
  // startIcon,
  // endIcon,
  // size,
  // color

  return (
    <div className="app">
      <h1>Buttons</h1>

      <div className="buttons_section1">

        <div className="buttons_section1_column1">
          <h2 className='buttonHeading' >{`<Button />`}</h2>
          <Button />
        </div>

        <div className="buttons_section1_column2">
          <h2 className='buttonHeading' >&:hover, &:focus</h2>
          <Button hover={true} focus={true} />
        </div>

      </div>


      <div className="buttons_section1">

        <div className="buttons_section1_column1">
          <h2 className='buttonHeading' >{`<Button variant="outline" />`}</h2>
          <Button variant="outline" />
        </div>

        <div className="buttons_section1_column2">
          <h2 className='buttonHeading' >&:hover, &:focus</h2>
          <Button variant="outline" hover={true} focus={true} />
        </div>

      </div>


      <div className="buttons_section1">

        <div className="buttons_section1_column1">
          <h2 className='buttonHeading' >{`<Button variant="text" />`}</h2>
          <Button variant="text" />
        </div>

        <div className="buttons_section1_column2">
          <h2 className='buttonHeading' >&:hover, &:focus</h2>
          <Button variant="text" hover={true} focus={true} />
        </div>

      </div>



      <div className="buttons_section1">

        <div className="buttons_section1_column1">
          <h2 className='buttonHeading' >{`<Button disableShadow />`}</h2>
          <Button disableShadow={true} />
        </div>


      </div>



      <div className="buttons_section1">

        <div className="buttons_section1_column1">
          <h2 className='buttonHeading' >{`<Button disabled />`}</h2>
          <Button disabled={true} />
        </div>

        <div className="buttons_section1_column2">
          <h2 className='buttonHeading' >{`<Button variant="text" disabled />`}</h2>
          <Button variant="text" disabled={true} />
        </div>

      </div>


      <div className="buttons_section1">

        <div className="buttons_section1_column1">
          <h2 className='buttonHeading' >{`<Button startIcon="store" />`}</h2>
          <Button startIcon="store" />
        </div>

        <div className="buttons_section1_column2">
          <h2 className='buttonHeading' >{`<Button endIcon="store" />`}</h2>
          <Button endIcon="store" />
        </div>

      </div>



      <div className="buttons_section2">

        <div className="buttons_section2_column1">
          <h2 className='buttonHeading' >{`<Button size="sm" />`}</h2>
          <Button size="sm" />
        </div>

        <div className="buttons_section2_column2">
          <h2 className='buttonHeading' >{`<Button size="md" />`}</h2>
          <Button size="md" />
        </div>

        <div className="buttons_section2_column3">
          <h2 className='buttonHeading' >{`<Button size="lg" />`}</h2>
          <Button size="lg" />
        </div>

      </div>


      <div className="buttons_section3">

        <div className="buttons_section3_column1">
          <h2 className='buttonHeading' >{`<Button color="default" />`}</h2>
          <Button color="default" />
        </div>

        <div className="buttons_section3_column2">
          <h2 className='buttonHeading' >{`<Button color="primary" />`}</h2>
          <Button color="primary" />
        </div>

        <div className="buttons_section3_column3">
          <h2 className='buttonHeading' >{`<Button color="secondary" />`}</h2>
          <Button color="secondary" />
        </div>

        <div className="buttons_section3_column4">
          <h2 className='buttonHeading' >{`<Button color="danger" />`}</h2>
          <Button color="danger" />
        </div>

      </div>


      <div className="buttons_section3">

        <div className="buttons_section3_column1">
          <h2 className='buttonHeading' >&:hover, &:focus</h2>
          <Button color="default" hover={true} focus={true} />
        </div>

        <div className="buttons_section3_column2">
          <Button color="primary" hover={true} focus={true} />
        </div>

        <div className="buttons_section3_column3">
          <Button color="secondary" hover={true} focus={true} />
        </div>

        <div className="buttons_section3_column4">
          <Button color="danger" hover={true} focus={true} />
        </div>

      </div>


    </div>
  )
}

export default App
