import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    firstName: yup.string().required(),
    phone: yup.number().min(10),
    email: yup.string().email('Invalid email').required('Email is required'),
}).required();
type FormData = yup.InferType<typeof schema>;

export default function MyForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" bg-orange-600 grid grid-cols-4 p-3 text-center">
                <div className="sm:col-span-2 lg:col-span-1 col-span-4">
                    <input {...register("firstName")} style={{borderRadius:"5px", height:"35px", marginTop:"15px", width:"200px", paddingLeft:"10px"}} placeholder="Your name" />
                    <p>{errors.firstName?.message}</p>
                </div>
                <div className="sm:col-span-2 lg:col-span-1 col-span-4">
                    <input {...register("email")} style={{borderRadius:"5px", height:"35px", marginTop:"15px", width:"200px", paddingLeft:"10px"}} placeholder="Email"/>
                    <p>{errors.email?.message}</p>
                </div>
                <div className="sm:col-span-2 lg:col-span-1 col-span-4">
                    <input {...register("phone")} style={{borderRadius:"5px", height:"35px", marginTop:"15px", width:"200px", paddingLeft:"10px"}} placeholder="Your phone number"/>
                    <p>{errors.phone?.message}</p>
                </div>
                <div className="sm:col-span-2 lg:col-span-1 col-span-4">
                    <button type="submit" style={{background:"black",borderRadius:"5px", height:"35px", width:"200px", color:"white", marginTop:"15px"}}>Subscribe email list</button>
                </div>
            </div>
        </form>
    );
}