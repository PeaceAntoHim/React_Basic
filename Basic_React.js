/** DOM Vanill JS 
const root = document.querySelector('#root');

const element = document.createElement('h1');
element.textContent = 'Halo Nama Saya Frans Sebastian';

root.appendChild(element);
**/

/** Lern DOM wirh React
const p1 = React.createElement('p', {
    children: 'Hello react 1',
});
const p2 = React.createElement('p', {
    children: 'Hello React 2',
});

const element = React.createElement(React.Fragment, {
    children: [p1, p2],
})
*/
/** Cara Pertama membuat data 
 const li1 = React.createElement('li', {
     children: 'Apple', 
    });
    const li2 = React.createElement('li', {
        children: 'Orange', 
    });
    const li3 = React.createElement('li', {
        children: 'Grape', 
    });
*/
   
/** Cara Pertama Rendering React
 * 
 const element = React.createElement('ul', {
     children: [li1, li2, li3],
    });
    */
   
   /** Rule Of React Syntax
    * 1. Parameter pertama digunakan untuk Tag name
    * 2. Parameter Kedua digunakan untuk Props(property/ children)
    * 3 .Parameter selsnjutnya digunakan untuk children 
    */

   /** Syntax react lama
   const element = React.createElement(
       'ul',
       { className: 'list' },
       React.createElement('li', null, 'Apple'),
       React.createElement('li', null, 'Orange'),
       React.createElement('li', null, 'Grape'),
       
   );
   */
   
  /* Syntax JSX */
    /*
      const element = (
          <ul>
              <li>Apple</li>
              <li>Orange</li>
              <li>Grape</li>
          </ul>
      );

      function up(text) {
          return text.toUpperCase();
      }

      const name = 'Frans Sebastian';
      const element = <h1>Hello My Name is {up(name)}</h1>
      const element = <h1>Hello my {new Date().toLocaleDateString()}</h1>;
      const element = <h1 className="heading-1">Hello my name Frans sebastian</h1>
      const element = <img src="https://statics.indozone.news/local/6119f8621f77e.jpg"/>
    const uTest = document.querySelector('#uTest');
    
    const className = 'heading-1';
    function halo(name) {
        return <p>Halo <b>{name}</b></p>
    }

    const element = (
        <>
            {halo('Dody Mulyanto')}
            {halo('Frans Sebastian')}
            {halo('Garin Girih')}
        </>
    );
*/

/* React Component */
   /*  
       function Halo(props) {
           return <p>Halo nama saya <b>{props.name}</b></p>
       }
   
       const element = (
           <>
               <Halo name="Frans Sebastian" />
               <Halo name="Karina Nabila" />
               <Halo name="Dodti Mulyanto" />
           </>
       );
   */

const uTest = document.querySelector('#uTest');

        /* React Render in DOM */
    function tick() {
            const element =  (
                <div>
                    <h1>Jam Sekarang</h1>
                    <h2>{new Date().toLocaleTimeString()}</h2>
                </div>
            );
    
        ReactDOM.render(element, uTest);
    }

    tick();
    setInterval(function () {
        tick();
    }, 1000);


