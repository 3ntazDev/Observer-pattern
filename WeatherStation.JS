class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }
    
    


    
    dregisterObserver(observer) {
        this.observers = this.observers.filter(obs=> obs !== this.observer);
    }






    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    setTemperature(temperature) {
        this.temperature = temperature;
        this.notifyObservers();
    }
}


class Observer {
    update(temperature) {
        
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