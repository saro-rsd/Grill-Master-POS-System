import {useEffect , useState} from "react";

export function useLocatStorage<T>(key: string, initialValue: T){
    const [value, setValue] = useState<T>(()=>{
        try{
            const saved = localStorage.getItem(key);
            return saved ? (JSON.parse(saved) as T ) : initialValue;
        }catch{
            return initialValue;
        }
    });
    
};