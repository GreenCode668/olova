/**
 * Olova - A lightweight reactive DOM library
 * @module Olova
 */

/**
 * Symbol used to represent a Fragment in the virtual DOM.
 */
export declare const Fragment: unique symbol;

/**
 * Creates a signal with an initial value.
 * A signal is a reactive value that can be subscribed to.
 * 
 * @param initialValue - The initial value of the signal.
 * @returns An array containing the getter and setter functions for the signal.
 */
export declare function setSignal<T>(initialValue: T): [
  /**
   * Getter function that returns the current value and subscribes the current effect.
   * @returns The current value of the signal.
   */
  () => T,
  
  /**
   * Setter function that updates the value and notifies subscribers.
   * @param newValue - The new value to set for the signal. It can be a value or a function that receives the current value and returns the new value.
   * @returns The updated value of the signal.
   */
  (newValue: T | ((currentValue: T) => T)) => T
];

/**
 * Creates an effect that runs when its dependencies change.
 * An effect is a function that is executed when the signals it depends on change.
 * 
 * @param effectFunction - The function to execute as the effect.
 */
export declare function setEffect(effectFunction: () => void | (() => void)): void;

/**
 * Creates a memoized value that only updates when its dependencies change.
 * 
 * @param memoFunction - The function to calculate the memoized value.
 * @returns A function that returns the memoized value.
 */
export declare function setMemo<T>(memoFunction: () => T): () => T;

/**
 * Creates a ref object for holding DOM element references.
 * 
 * @returns A function that can be assigned to an element ref and retrieve the current element.
 */
export declare function setRef<T extends Node = HTMLElement>(): (element?: T) => T | null;

/**
 * Properties for HTML and SVG elements.
 */
export interface ElementProperties {
  [key: string]: any;
  
  /** CSS class name(s) */
  className?: string;
  
  /** CSS class name(s) (alias for className) */
  class?: string;
  
  /** Inline styles as object or string */
  style?: Partial<CSSStyleDeclaration> | string;
  
  /** HTML content to be set directly (use with caution) */
  dangerouslySetInnerHTML?: { __html: string };
  
  /** Reference to the DOM element */
  ref?: ((element: Element) => void) | { current: Element | null };
  
  /** Value attribute (primarily for form elements) */
  value?: any;
  
  /** Event handlers (e.g., onClick, onInput, etc.) */
  [eventName: `on${string}`]: (event: Event) => void;
}

/**
 * Supported child types in the virtual DOM.
 */
export type Child = Node | string | number | boolean | null | undefined | Child[] | (() => Child) | Promise<Child>;

/**
 * Component function type definition.
 */
export type Component<P = any> = (props: P, ...children: Child[]) => Node;

/**
 * Enhanced html function for creating DOM elements. Supports JSX-style syntax.
 * 
 * @param tagName - The tag name of the element to create, or a function component.
 * @param properties - An object containing the properties to set on the element.
 * @param children - The children to append to the element.
 * @returns The created DOM element, fragment, or a comment in case of error.
 */
export declare function html(
  tagName: string | Component | typeof Fragment | null | undefined,
  properties?: ElementProperties | null,
  ...children: Child[]
): Node;

/**
 * Options for the render function.
 */
export interface RenderOptions {
  /** Whether to clear the existing content of the root element before rendering. Default: true */
  clear?: boolean;
  
  /** Whether to hydrate the existing content of the root element. Default: false */
  hydrate?: boolean;
  
  /** A function to execute before rendering. */
  beforeRender?: (rootElement: Element) => void;
}

/**
 * Renders a component into a root element.
 * This function is responsible for mounting the virtual DOM into the actual DOM.
 * 
 * @param component - The component to render. Can be a function component or a direct element.
 * @param rootElement - The root element to render the component into. Can be an Element or a selector string.
 * @param options - Optional parameters for rendering.
 * @returns The rendered element or fragment, or null in case of error.
 */
export declare function render(
  component: (() => Node | Node[] | null) | Node | Node[] | null,
  rootElement: Element | string,
  options?: RenderOptions
): Node | DocumentFragment | null;

/**
 * Executes a function after the component has been mounted to the DOM.
 * This is similar to `componentDidMount` in React.
 * 
 * @param mountFunction - The function to execute after the component is mounted.
 */
export declare function onMount(mountFunction: () => void): void;

/**
 * Executes a function when the component is unmounted from the DOM.
 * This is similar to `componentWillUnmount` in React.
 * 
 * @param cleanupFunction - The function to execute when the component is unmounted.
 *   This function can be used to clean up resources like timers or event listeners.
 */
export declare function onUnmount(cleanupFunction: () => void): void;