package com.nocountry.cleanreactive.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.cleanreactive.model.ServSchedule;
import com.nocountry.cleanreactive.model.ServType;
import com.nocountry.cleanreactive.model.User;
import com.nocountry.cleanreactive.repository.ServTypeRepository;
import com.nocountry.cleanreactive.repository.UserRepository;
import com.nocountry.cleanreactive.responses.ServScheduleResponse;
import com.nocountry.cleanreactive.schemas.ScheduleSchema;
import com.nocountry.cleanreactive.service.ServScheduleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/serv-schedule")
public class ServScheduleController {

    private final ServScheduleService servSchedule;

    private final ServTypeRepository servTypeRepo;

    private final UserRepository userRepo;

    @Operation(summary = "Get schedules [ADMIN]", description = "Get schedules from the database", tags = {
            "Service Schedule" })
    @GetMapping
    public ResponseEntity<?> findAll() {
        try {
            List<ServSchedule> schedules = servSchedule.getAllServSchedules();
            return new ResponseEntity<>(schedules, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Get schedules by UserId", description = "Get schedules of the user from the database", tags = {
            "Service Schedule" })
    @GetMapping(path = "{userId}")
    public ResponseEntity<?> findAllByUserId(@PathVariable("userId") String userId) {
        try {
            List<ServSchedule> schedules = servSchedule.getAllServSchedulesByUserId(userId);
            List<ServScheduleResponse> responseList = new ArrayList<>();

            for (ServSchedule schedule : schedules) {
                ServScheduleResponse response = new ServScheduleResponse();
                response.setId(schedule.getId());
                response.setProgramDate(schedule.getProgramDate());
                response.setDirection(schedule.getDirection());
                response.setStatus(schedule.getStatus());
                response.setSize(schedule.getSize());
                response.setDepth(schedule.getDepth());
                response.setPeriod(schedule.getPeriod());
                response.setWorkday(schedule.getWorkday());
                response.setTotalCost(schedule.getTotalCost());
                response.setTypeId(schedule.getServType().getId());
                response.setUserId(schedule.getUser().getId());
                responseList.add(response);
            }
            return new ResponseEntity<>(responseList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Save schedule", description = "Save schedule to the database", tags = {
            "Service Schedule" })
    @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(schema = @Schema(implementation = ScheduleSchema.class)))
    @PostMapping
    public ResponseEntity<?> save(@RequestBody ServSchedule schedule) {
        try {
            ServType type = servTypeRepo.findByType(schedule.getServType().getType()).orElseThrow();
            User user = userRepo.findByEmail(schedule.getUser().getEmail()).orElseThrow();

            Integer newCost = type.getCost(); // cost = 40000 | 60000

            if (type.getType().equals("hogar")) {

                if (schedule.getDepth().equals("simple")) {
                    newCost += 0;
                }

                if (schedule.getDepth().equals("profunda")) {
                    newCost += 10000; // newCost + cost * 25%
                }

                if (schedule.getSize().equals("pequeño")) {
                    newCost += 0;
                }

                if (schedule.getSize().equals("mediano")) {
                    newCost += 18000; // newCost + cost * 45%
                }

                if (schedule.getSize().equals("grande")) {
                    newCost += 30000; // newCost + cost * 75%
                }

                if (schedule.getWorkday().equals("mañana")) {
                    newCost += 0;
                }

                if (schedule.getWorkday().equals("tarde")) {
                    newCost += 0;
                }

                if (schedule.getWorkday().equals("noche")) {
                    newCost += 6000; // newCost + cost * 15%
                }

                if (schedule.getPeriod().equals("unica")) {
                    newCost += 0;
                }

                if (schedule.getPeriod().equals("2/semana")) {
                    newCost += 80000; // newCost + cost * 2
                }

                if (schedule.getPeriod().equals("3/semana")) {
                    newCost += 120000; // newCost + cost * 3
                }

                if (schedule.getPeriod().equals("diario")) {
                    newCost += 240000; // newCost + cost * 6 (4hours - discount)
                }

            }

            if (type.getType().equals("oficina")) {

                if (schedule.getSize().equals("pequeño")) {
                    newCost += 0;
                }

                if (schedule.getSize().equals("mediano")) {
                    newCost += 27000; // newCost + cost * 45%
                }

                if (schedule.getSize().equals("grande")) {
                    newCost += 45000; // newCost + cost * 75%
                }

                if (schedule.getWorkday().equals("mañana")) {
                    newCost += 0;
                }

                if (schedule.getWorkday().equals("tarde")) {
                    newCost += 0;
                }

                if (schedule.getWorkday().equals("noche")) {
                    newCost += 9000; // newCost + cost * 15%
                }

                // if (Integer.parseInt(schedule.getRooms()) >= 1 &
                // Integer.parseInt(schedule.getRooms()) <= 3) {
                // newCost += 0;
                // }

                // if (Integer.parseInt(schedule.getRooms()) >= 4 &
                // Integer.parseInt(schedule.getRooms()) <= 10) {
                // newCost += 9000; // newCost + cost * 15%
                // }

                // if (Integer.parseInt(schedule.getRooms()) >= 10) {
                // newCost += 18000; // newCost + cost * 30%
                // }

                if (schedule.getPeriod().equals("unica")) {
                    newCost += 0;
                }

                if (schedule.getPeriod().equals("2/semana")) {
                    newCost += 120000; // newCost + cost * 2
                }

                if (schedule.getPeriod().equals("3/semana")) {
                    newCost += 180000; // newCost + cost * 3
                }

                if (schedule.getPeriod().equals("diario")) {
                    newCost += 360000; // newCost + cost * 6 (4hours - discount)
                }

            }

            schedule.setTotalCost(newCost);
            schedule.setServType(type);
            schedule.setUser(user);
            ServSchedule response = servSchedule.createServSchedule(schedule);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // @Operation(summary = "Update schedule", description = "Update schedule from
    // the database", tags = {
    // "Service Schedule" })
    // @PutMapping(path = "{id}")
    // public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody
    // ServSchedule schedule) {
    // try {
    // ServSchedule _schedule = servSchedule.findServScheduleById(id).orElseThrow();

    // _schedule.setDirection(schedule.getDirection());
    // _schedule.setProgramDate(schedule.getProgramDate());
    // _schedule.setStatus(schedule.getStatus());

    // servSchedule.updateServSchedule(_schedule);
    // return new ResponseEntity<>(_schedule, HttpStatus.OK);
    // } catch (Exception e) {
    // return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    // }
    // }

    @Operation(summary = "Delete schedule", description = "Delete schedule from the database", tags = {
            "Service Schedule" })
    @DeleteMapping(path = "{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id) {
        try {
            servSchedule.deleteServScheduleById(id);
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}