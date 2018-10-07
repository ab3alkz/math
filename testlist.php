<table class="test-list-table" border="1" width="100%">
    <thead>
    <tr>
        <th>Сынақ атауы</th>
        <th>Сурақтар саны</th>
        <th>Сыналды</th>
        <th>Орташа нәтиже</th>
    </tr>
    </thead>
    <tbody>
    <?php
    $result = mysql_query(
        "SELECT l.id, l.test,  l.id_txt, (select COUNT(1) FROM questions q WHERE q.test = l.id) questions, 
                sum(case WHEN t.id is NOT null THEN 1 else 0 end) result_cnt, 
                sum(case when t.result is null then 0 else t.result end) result FROM lecture l 
                LEFT OUTER join testresult t ON (t.test = l.id) where l.test is not null group by l.id, l.test,  l.id_txt ", $db);
    $myrow = mysql_fetch_array($result);
    if ($myrow == true) {
        $idx = 0;

        do {
            $idx++;
            $trBg = '';
            if (bcmod($idx, 2) == 1) {
                $trBg = " style= 'background: #f3f4f8'";
            }

            ?>

            <tr <?php echo $trBg ?> >
                <th>
                    <?php
                    if ($myrow['result_cnt'] > 0) {
                        echo '<a href="?action=test&lecture=' . $myrow['id_txt'] . '&id=' . $myrow['id'] . '">' . $myrow['test'] . '</a>';
                    } else {
                        echo '<span>' . $myrow['test'] . '</span>';
                    }
                    ?>
                </th>
                <th><?php echo $myrow['questions']; ?></th>
                <th><?php echo $myrow['result_cnt']; ?></th>
                <th><?php echo round($myrow['result'] / $myrow['result_cnt']); ?></th>
            </tr>

            <?php
        } while ($myrow = mysql_fetch_array($result));
    }

    ?>
    </tbody>
</table>

<style>
    .test-list-table {
        border: 1px solid silver;
    }

    .test-list-table th, .test-list-table td {
        font-weight: normal;
        padding: 5px !important;
    }


</style>