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



   
 /*  
  Syntax JSX
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
      
      
        const className = 'heading-1';
    
        const element = (
            <>
                <p>Halo <b>Stefanus</b></p>
                <p>Halo <b>Frans</b></p>
                <p>Halo <b>Sebastian</b></p>
            </>
        ); */



    /* Set Environment */

    /*  
      console.log('otomatis di prosessdsadfsfd');

    function thick() {
        const element = (
            <div>
                <h1>Jam Sekarang</h1>
                {new Date().toLocaleTimeString()}
            </div>
        );
        ReactDOM.render(element, uTest);
    }

thick();
setInterval(function() {
    thick();
}, 1000);
*/

/* Cara Nulis Inline Style di object untuk library reacr  */
/*     
const element = (
    <div 
    style={{
        width: 200,
        height: 200,
        backgroundColor: 'blue',
    }}></div>

    );

    const className = 'box';
    const element = <div className={className}></div>
*/

/* Made With React Component */
/*  
    function padaSaatAkuDiklik(msg){
        alert(msg);
    }
    
    const element = (<button onClick={padaSaatAkuDiklik.bind(this, 'Hello, aku di klik')}>Click me</button>
    );
    */



   /* State Hooks Before Distructuring */
       /* function App() {
           const state = React.useState(0);
   
           const count = state[0];
           const updateCount = state[1];
            console.log(updateCount);
   
           return (
               <>
               <button
                   onClick={function() {
                       updateCount(count - 1);
                   }}>
                   -
               </button>
               <span>{count}</span>
               <button
                   onClick={function () {
                       updateCount(count + 1);
                   }}>
                   +
               </button>
               </>
           );
       } */


       /* State Hooks After Distructuring */
/* 
function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
        <button
            onClick={function() {
                setCount(count - 1);
            }}>
            -
        </button>
        <span>{count}</span>
        <button
            onClick={function () {
                setCount(count + 1);
            }}>
            +
        </button>
        </>
    );
} */


const uTest = document.querySelector('#uTest');   


/* Ccomponent lifecycle(effect hooks) */

function App() {
    const [diklik, setDiklik] = React.useState(false);
    const [count, setCount] = React.useState(0);

    React.useEffect(function() {
        console.log('exec');

        const carousel = new Slick;

        return function() { 
            console.log('destroy carousel')
            carousel.destroy();
        }
    }, []);

    return (
        <>
            <h1 id="judul">Hello world</h1>
            <button
                onClick={function() {
                    setDiklik(true);
                }}>
                Klik aku dong
            </button>
            <button
                onClick={function() {
                    setCount(count + 1);
                }}>
                Tambah
            </button>
            Nilai saat ini: {count}
        </>
    ); 
}


ReactDOM.render(<App />, uTest);

console.log(document.getElementById('judul'));