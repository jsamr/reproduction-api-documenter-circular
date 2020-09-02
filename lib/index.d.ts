/** @public */
export interface A {
  /** {@link B.options} */
  readonly options: any;
}

/** @public */
export type B = {
  readonly options: any;
  /** {@link C.bar} */
  readonly bar: string;
};

/** @public */
export type C = {
  /** {@link A} */
  readonly script: string;
  readonly bar: string;
};
