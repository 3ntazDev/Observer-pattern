class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
    }

    // Register an observer
    registerObserver(observer) {
        this.observers.push(observer);
    }

    // Notify observers of changes
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    // Set a new temperature
    setTemperature(temperature) {
        this.temperature = temperature;
        this.notifyObservers();
    }
}


class Observer {
    update(temperature) {
        // This method will be implemented by concrete observers
    }
}



class TemperatureDisplay extends Observer {
    constructor(displayElement) {
        super();
        this.displayElement = displayElement;
    }

    update(temperature) {
        this.displayElement.textContent = `  ${temperature} °C`;
    }
}


class NotificationService extends Observer {
    update(temperature) {
        alert(`Notification: The temperature is now ${temperature} °C`);
    }
}

class TemperatureLogger {
    update(temperature) {
        console.log(`TemperatureLogger: Logged new temperature -> ${temperature} °C`);
    }
}






const weatherStation = new WeatherStation();



const temperatureDisplay = new TemperatureDisplay(document.getElementById('temperature'));
const notificationService = new NotificationService();
const tempLogger = new TemperatureLogger();





weatherStation.registerObserver(temperatureDisplay);
weatherStation.registerObserver(notificationService);
weatherStation.registerObserver(tempLogger);











document.getElementById('changeTempBtn').addEventListener('click', function() {
    const newTemperature = Math.floor(Math.random() * 41); 
    weatherStation.setTemperature(newTemperature); 
    document.getElementById('newTemperature').textContent = `درجة الحرارة الجديدة: ${newTemperature} °C`;
});