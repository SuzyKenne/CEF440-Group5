export type CalendarProps = {
  onDateSelect: (date: Date) => void;
  initialDate?: Date;
};
export interface TimeProps {
  onTimeSelect: (time: Date) => void;
  initialTime?: Date;
}
