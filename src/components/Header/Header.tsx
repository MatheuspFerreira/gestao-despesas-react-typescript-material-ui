import IChildren from '../../interfaces/childre-props';



export default function Header({children}:IChildren){
    return(
        <div 
            className="
                w-full flex 
                flex-row-reverse 
                items-center 
                justify-between  
                p-32
            "
        >

            {children}

        </div>

    );
}