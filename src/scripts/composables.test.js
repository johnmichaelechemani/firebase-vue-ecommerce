import { describe, it, expect, vi } from "vitest";
import { decrementProduct, clearAlert, formatPrice, formatSoldNumber, Time, incrementProduct, debounce } from "./composables";

describe("decrementProduct", () => {
  it("should decrement the quantity if it is greater than 1", () => {
    const item = { quantity: 5, inventory: 10 };
    decrementProduct(item);
    expect(item.quantity).toBe(4);
  });

  it("should not decrement the quantity if it is 1", () => {
    const item = { quantity: 1, inventory: 10 };
    decrementProduct(item);
    expect(item.quantity).toBe(1);
  });

  it("should not decrement the quantity if it is less than 1", () => {
    const item = { quantity: 0, inventory: 10 };
    decrementProduct(item);
    expect(item.quantity).toBe(0);
  });

describe("decrementProduct", () => {
    it("should decrement the quantity if it is greater than 1", () => {
        const item = { quantity: 5, inventory: 10 };
        decrementProduct(item);
        expect(item.quantity).toBe(4);
    });

    it("should not decrement the quantity if it is 1", () => {
        const item = { quantity: 1, inventory: 10 };
        decrementProduct(item);
        expect(item.quantity).toBe(1);
    });

    it("should not decrement the quantity if it is less than 1", () => {
        const item = { quantity: 0, inventory: 10 };
        decrementProduct(item);
        expect(item.quantity).toBe(0);
    });
});

describe("clearAlert", () => {
    it("should set boolean input to false after 2000ms", () => {
        vi.useFakeTimers();
        let input = true;
        clearAlert(input);
        vi.advanceTimersByTime(2000);
        expect(input).toBe(false);
        vi.useRealTimers();
    });

    it("should clear the value of an object with a value property after 2000ms", () => {
        vi.useFakeTimers();
        const input = { value: "test" };
        clearAlert(input);
        vi.advanceTimersByTime(2000);
        expect(input.value).toBe("");
        vi.useRealTimers();
    });

    describe("decrementProduct", () => {
      it("should decrement the quantity if it is greater than 1", () => {
        const item = { quantity: 5, inventory: 10 };
        decrementProduct(item);
        expect(item.quantity).toBe(4);
      });

      it("should not decrement the quantity if it is 1", () => {
        const item = { quantity: 1, inventory: 10 };
        decrementProduct(item);
        expect(item.quantity).toBe(1);
      });

      it("should not decrement the quantity if it is less than 1", () => {
        const item = { quantity: 0, inventory: 10 };
        decrementProduct(item);
        expect(item.quantity).toBe(0);
      });
    });

    describe("clearAlert", () => {
      it("should set boolean input to false after 2000ms", () => {
        vi.useFakeTimers();
        let input = true;
        clearAlert(input);
        vi.advanceTimersByTime(2000);
        expect(input).toBe(false);
        vi.useRealTimers();
      });

      it("should clear the value of an object with a value property after 2000ms", () => {
        vi.useFakeTimers();
        const input = { value: "test" };
        clearAlert(input);
        vi.advanceTimersByTime(2000);
        expect(input.value).toBe("");
        vi.useRealTimers();
      });
    });

    describe("formatPrice", () => {
      it("should format the price correctly", () => {
        expect(formatPrice(1234.56)).toBe("1,234.56");
        expect(formatPrice(0)).toBe("0.00");
        expect(formatPrice(1000000)).toBe("1,000,000.00");
      });
    });

    describe("formatSoldNumber", () => {
      it("should format the sold number correctly", () => {
        expect(formatSoldNumber(1000000)).toBe("1.0M");
        expect(formatSoldNumber(1500)).toBe("1.5k");
        expect(formatSoldNumber(500)).toBe(500);
      });
    });

    describe("Time", () => {
      it("should format the time correctly", () => {
        const timestamp = { seconds: Math.floor(Date.now() / 1000) };
        expect(Time(timestamp)).toMatch(/\d{1,2}:\d{2} (am|pm)/);

        const yesterdayTimestamp = { seconds: Math.floor(Date.now() / 1000) - 86400 };
        expect(Time(yesterdayTimestamp)).toMatch(/Yesterday \d{1,2}:\d{2} (am|pm)/);

        const lastWeekTimestamp = { seconds: Math.floor(Date.now() / 1000) - 604800 };
        expect(Time(lastWeekTimestamp)).toMatch(/[A-Za-z]{3} \d{1,2} \d{1,2}:\d{2} (am|pm)/);
      });
    });

    describe("incrementProduct", () => {
      it("should increment the quantity if it is less than inventory", () => {
        const item = { quantity: 5, inventory: 10 };
        incrementProduct(item);
        expect(item.quantity).toBe(6);
      });

      it("should not increment the quantity if it is equal to inventory", () => {
        const item = { quantity: 10, inventory: 10 };
        incrementProduct(item);
        expect(item.quantity).toBe(10);
      });
    });

    describe("debounce", () => {
      it("should debounce the function call", () => {
        vi.useFakeTimers();
        const fn = vi.fn();
        const debouncedFn = debounce(fn, 200);
        debouncedFn();
        debouncedFn();
        vi.advanceTimersByTime(100);
        debouncedFn();
        vi.advanceTimersByTime(200);
        expect(fn).toHaveBeenCalledTimes(1);
        vi.useRealTimers();
      });
    });
});
});
