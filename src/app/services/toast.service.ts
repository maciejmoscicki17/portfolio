import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum ToastType {
  error,
  warning,
  success,
}

export interface ToastData {
  id?: number;
  title: string;
  content: string;
  show?: boolean;
  type: ToastType;
  time?: number;
  animationClass?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private idTracker = 0;
  data: ToastData[] = [];
  public showToast = new Subject<ToastData>();
  public toastUpdate$ = this.showToast.asObservable();

  add(toast: ToastData) {
    if (!toast.time) {
      toast.time = 5000;
    }
    toast.animationClass = 'slideInFromTop';
    toast.id = ++this.idTracker;
    this.data.push(toast);
    this.showToast.next(toast);
  }
}
