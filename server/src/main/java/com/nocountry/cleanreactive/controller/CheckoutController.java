package com.nocountry.cleanreactive.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercadopago.client.preference.PreferenceBackUrlsRequest;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import com.nocountry.cleanreactive.exceptions.NotFoundException;
import com.nocountry.cleanreactive.model.ServSchedule;
import com.nocountry.cleanreactive.repository.ServScheduleRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/checkout")
public class CheckoutController {

        private final ServScheduleRepository servScheduleRepository;

        @PostMapping("{scheduleId}")
        public ResponseEntity<?> createCheckout(@PathVariable("scheduleId") String scheduleId)
                        throws MPException, MPApiException {
                try {
                        PreferenceClient client = new PreferenceClient();
                        ServSchedule schedule = servScheduleRepository.findById(scheduleId)
                                        .orElseThrow(() -> new NotFoundException(
                                                        "Schedule with id " + scheduleId + " not found"));
                        List<PreferenceItemRequest> items = new ArrayList<>();
                        PreferenceItemRequest item = PreferenceItemRequest.builder()
                                        .id(schedule.getId())
                                        .title(schedule.getServType().getType())
                                        .description(schedule.getServType().getDesc())
                                        .quantity(1)
                                        .currencyId("COL")
                                        .pictureUrl("https://www.megaclean.com.ar/wp-content/uploads/2019/06/pack-4.jpg")
                                        .unitPrice(new BigDecimal(schedule.getTotalCost()))
                                        .build();
                        items.add(item);
                        PreferenceBackUrlsRequest backUrls = PreferenceBackUrlsRequest.builder()
                                        .success("https://dust-busters.netlify.app/successPayment")
                                        .pending("https://jealous-flavor-production.up.railway.app/api/v1/checkout/pending")
                                        .failure("https://jealous-flavor-production.up.railway.app/api/v1/checkout/failure")
                                        .build();

                        PreferenceRequest request = PreferenceRequest.builder()
                                        .items(items)
                                        .notificationUrl(null)
                                        .autoReturn("approved")
                                        .backUrls(backUrls)
                                        .build();

                        Preference resulset = client.create(request);

                        return new ResponseEntity<>(resulset.getInitPoint(), HttpStatus.OK);
                } catch (Exception e) {
                        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
                }
        }

        // @PostMapping("notification")
        // public ResponseEntity<String> notification(@RequestParam String data_id,
        // @RequestParam String type) {
        // System.out.println("DATA_ID: " + data_id);
        // System.out.println("TYPE: " + type);
        // return new ResponseEntity<>(null, HttpStatus.OK);
        // }

        @GetMapping("pending")
        @ResponseBody
        public String pending() {
                String html = "<h1 style='color: orangered;'><strong>ESTADO:</strong> PENDING</h1>";
                String script = "<script>setTimeout(function(){ window.location.href='https://dust-busters.netlify.app'; }, 2000);</script>";
                return html + script;
        }

        @GetMapping("failure")
        @ResponseBody
        public String failure() {
                String html = "<h1 style='color: red;'><strong>ESTADO:</strong> FAILURE</h1>";
                String script = "<script>setTimeout(function(){ window.location.href='https://dust-busters.netlify.app'; }, 2000);</script>";
                return html + script;
        }

        // @GetMapping("success")
        // @ResponseBody
        // public String success() {
        // String html = "<h1 style='color: darkgreen;'><strong>ESTADO:</strong>
        // SUCCESS</h1>";
        // String script = "<script>setTimeout(function(){
        // window.location.href='https://dust-busters.netlify.app'; }, 2000);</script>";
        // return html + script;
        // }

}
