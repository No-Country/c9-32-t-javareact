package com.nocountry.cleanreactive.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nocountry.cleanreactive.exceptions.BadRequestException;
import com.nocountry.cleanreactive.exceptions.NotFoundException;
import com.nocountry.cleanreactive.model.ServSchedule;
import com.nocountry.cleanreactive.repository.ServScheduleRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ServScheduleService {

    private final ServScheduleRepository servScheduleRepo;

    public ServSchedule createServSchedule(ServSchedule servSchedule) {
        // List<ServSchedule> serv = servScheduleRepo.findByDirection(servSchedule.getDirection());
        // if (serv.size() >= 1) {
        //     throw new BadRequestException("Duplicated direction");
        // }
        return servScheduleRepo.save(servSchedule);
    }

    public List<ServSchedule> getAllServSchedulesByUserId(String id) {
        List<ServSchedule> schedules = servScheduleRepo.findAllByUserId(id);
        if (schedules.size() <= 0) {
            throw new BadRequestException("Schedules are empty");
        }
        return schedules;
    }

    public List<ServSchedule> getAllServSchedules() {
        List<ServSchedule> schedules = servScheduleRepo.findAll();
        if (schedules.size() <= 0) {
            throw new BadRequestException("Schedules are empty");
        }
        return schedules;
    }

    public ServSchedule updateServSchedule(ServSchedule schedule) {
        return servScheduleRepo.save(schedule);
    }

    public Optional<ServSchedule> findServScheduleById(String id) {
        if (!servScheduleRepo.existsById(id)) {
            throw new NotFoundException("Schedule with id " + id + " does not exists");
        }
        return servScheduleRepo.findById(id);
    }

    public Integer deleteServScheduleById(String id) {
        if (!servScheduleRepo.existsById(id)) {
            throw new NotFoundException("Schedule with id " + id + " does not exists");
        }
        servScheduleRepo.deleteById(id);
        return HttpStatus.NO_CONTENT.value();
    }

}
