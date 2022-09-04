import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;
  // currentValue := 300;

  stable var startTime = Time.now();

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(withdrawAmount: Float) {
    if(currentValue - withdrawAmount: Float >= 0) {
        currentValue -= withdrawAmount;
        Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Value is large Betta!");
    }
  };

  public query func returnAmount(): async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS =  timeElapsedNS / 1000000000;
    currentValue := currentValue * (1.01 * Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };

}