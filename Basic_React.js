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
   
const uTest = document.querySelector('#uTest');

    // Syntax JSX
    const element = (
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Grape</li>
        </ul>
    );

ReactDOM.render(element, uTest);
