import { useForm } from "react-hook-form";
import { useRef } from "react"
import { toast } from "react-toastify";

export function Checkout() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formRef = useRef()
    const onSubmit = () => {

       
        
        const datForm = new FormData(formRef.current)
        const data = Object.fromEntries(datForm)
        console.log(data)
        toast.success(`Su compra fue realizada con exito! 🍂`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        

        formRef.current.reset()

    }





    return (
        <div className="containerForm">
            <div className="formImg">
                <img src="./public/img/checkout1.png" alt="" />
            </div>
            <form action="" ref={formRef} className="formFather" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="formTittle">Ya casi es tuyo!</h1>
                <input className="formInput" type="text" placeholder="NOMBRE" {...register("NOMBRE", { required: true, max: 10, min: 3, minLength: 3 })} />
                <input className="formInput" type="text" placeholder="APELLIDO" {...register("APELLIDO", { required: true, max: 15, min: 3, minLength: 3,  })} />
                <input className="formInput" type="text" placeholder="EMAIL" {...register("EMAIL", { required:  true, max: 20, min: 10, pattern: /^\S+@\S+$/i })} />
                <input className="formSend" type="submit" />
            </form>
        </div>
    )
}

