export type student = {
  name: string;
  attendance: studentAttendanceType;
};

type studentAttendanceType = {
  presence: boolean;
  absence: boolean;
};
