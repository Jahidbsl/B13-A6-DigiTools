import { Trash } from 'lucide-react';
import React from 'react';

const CartDisk = ({product,handelTrash}) => {
    console.log(product ,'product')
    return (
  <div className='border border-gray-200 rounded-2xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
    <div className="flex items-center gap-6">
        {/* Image Container: Image size control kora hoyeche */}
        <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-full overflow-hidden border border-gray-100 p-2">
            <img 
                src={product.icon} 
                alt={product.name} 
                className="w-full h-full object-contain"
            />
        </div>
        
        {/* Text Container: Text alignment thik kora hoyeche */}
        <div className='flex flex-col justify-center'>
            <h4 className='text-lg font-bold text-slate-800 leading-tight'>{product.name}</h4>
            <p className='text-brand-primary font-semibold text-blue-600 mt-1'>${product.price}</p>
        </div>
    </div>
    <button onClick={()=>handelTrash(product)}
    className="p-2 hover:bg-red-50 rounded-full transition-colors duration-200 group">
        <Trash size={20} className="text-red-400 group-hover:text-red-600 transition-colors" />
    </button>

</div>
    );
};

export default CartDisk;