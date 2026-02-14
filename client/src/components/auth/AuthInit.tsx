"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { getCurrentUser } from "@/api/actions/userActions";

export const AuthInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return null;
};
