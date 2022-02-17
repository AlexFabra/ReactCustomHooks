# ReactCustomHooks

repositiorio de mis custom hooks 

**useCounter**

dado un numero como parámetro, retorna el numero, una función que incrementa de uno en uno, otra que resta de la misma forma y un reset.
ejemplo de uso: 
```
const {state,increment,decrement,reset} = useCounter(1);
```
**useFetch**

dada una url como parámetro, retorna un state con data, loading y error. 
Loading se inicializa en true, cuando data deja de ser null, loading queda en false.
```
const url='api enpoint';
const {data:null,loading:true,error:null} = useFetch(url);
```
**useForm**

dada un objeto como parámetro, retorna dicho objeto, su gestor (handleInputChange) y una función de reset
```
const initialForm = {name:'',age:0,email:''}
const {formValues,handleInputChange,reset} = useForm(initialForm);
```
