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

/* Ccomponent lifecycle(effect hooks) */

/* function App() {
    const [diklik, setDiklik] = React.useState(false);
    const [count, setCount] = React.useState(0);

    React.useEffect(function () {
        console.log('init carousel');

        // const carousel = new Slick;

        return function () { 
            console.log('destroy carousel');
            // carousel.destroy();
        };
    });

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
    console.log(document.getElementById('judul'));
} */

/* first conditonal rendering */

/*  if(login) {
    return (
        <>
        <h1>Udah, Dulu Bang</h1>
        <button onClick={function () {
            setLogin(false);
        }}>
        Logout
        </button>
        </>
        );
    } */

/* Lern Conditional rendering */
{
  /* Conditional Jsx rendering part 1 */
}
{
  /* <p>{login ? <b>Kamu sudah login</b> : <i>Kamu belum login</i>}</p> */
}
{
  /* Condiotpnal JSX rendering part 2 */
}
{
  /*    <p>{login === true && <b>Kamu Sudah Login</b>}</p>
          <button
          onClick={function () {
              setLogin(true);
          }}>
          login
      </button>*/
}
/* DOM Manipulation */

/* function App() {
        const [login, setLogin] = React.useState(false);
        const judulRef = React.useRef(null);

    React.useEffect(function() {
        setTimeout(function() {
            judulRef.current.textContent = 'Aplikasi';
        }, 1000);
    }, []);
    
    return (
        <>
            <h1 ref={judulRef}>Applications</h1>
        </>
    );
} */

const uTest = document.querySelector('#uTest');
/* React list & keys */

/* const fruits = ['Apple', 'Grape', 'Banana', 'Orange', 'strawberry'];
    <ul>
        {fruits.map(function(fruit) {
            return <li key={fruit}>{fruit}</li>;    
        })}
    </ul> */

/* Modify Forms with React */

/* const namaRef = React.useRef(null); */

/* const nama = namaRef.current.value;

console.log('Nama:', nama) */

/*       const [nama, setNama] = React.useState('Frans');
      

  function ketikaSubmit(event) {
      event.preventDefault();

      console.log('Nama: ', nama);
  }

  return (
      <form onSubmit={ketikaSubmit}>
          <div>
              <lable>Nama: </lable>
              <input 
                  type="text" 
                  name="nama"
                  value={nama}
                  onChange={function(event) {
                      setNama(event.target.value);
                  }}
              />
          </div>
          <button type="submit">Kirim</button>
      </form>
  ); */

/* Data fetching (HTTP client request) */
// First

/*  React.useEffect(function () {
            const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response);
                });
            console.log(getData);
        },
        []); */

/*     // Seacond cara fectch data menggunakan function dalam function 
            const [news, setNews] = React.useState([]);
            const [loading, setLoading] = React.useState([true]);
    
            React.useEffect(function () {
                async function getData() {
                    const request = await fetch(
                        'https://api.spaceflightnewsapi.net/v3/blogs'
                    );
                    console.log(request);
                    const response = await request.json();
    
                    console.log(response);
                    setNews(response);
                    setLoading(false);
                }
                getData();
            }, []);
    
    
            return ( < > < h1 > Data Fetch < /h1>   {
                loading && < i > loading data... < /i>}  : ( <
                ul > {
                    news.map(function (item) {
                        // console.log(item);
                        return <li key = {
                            item.id
                        } > {
                            item.title
                        } < /li>
    
                    })
                } <
                /ul> 
            )
        } < / >);
    } */

/* Capter 4 */

/* Study case use state and lisst it's Simple Todo list */

function App() {
  // Bagian pengumpulan data
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState('');

  function genereateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMessage('Nama aktifitas jangan kosong!');
    }

    setMessage(''); // Logic

    if (edit.id) {
      const updatedTodo = { ...edit,
        activity
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancleEditHandler();
    } // setting


    setTodos([...todos, {
      id: genereateId(),
      activity,
      done: false
    }]);
    setActivity('');
  } // Fungsi hapus


  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancleEditHandler();
  } // Fungso edit


  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  } // Fungsi batal


  function cancleEditHandler(todo) {
    setEdit({});
    setActivity([]);
  } // Fungsi ceklist


  function doneTodoHandler(todo) {
    const updatedTodo = { ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo; // console.log(updatedTodos);

    setTodos(updatedTodos);
  }
  /* Eksekusi Aplikasii */


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple todo list"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Simpan perubahan' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancleEditHandler
  }, "Batal Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? 'Selesai' : 'Belum Selesai', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Tidak ada to do")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), uTest);