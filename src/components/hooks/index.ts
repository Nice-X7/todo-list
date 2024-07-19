import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { AppDispatch } from "../../redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTypedDispatch = () => useDispatch<AppDispatch>();