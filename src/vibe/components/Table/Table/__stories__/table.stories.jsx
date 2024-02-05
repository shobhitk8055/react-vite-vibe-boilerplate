import { useState } from "react";
import Table from "../Table";
import TableHeader from "../../TableHeader/TableHeader";
import TableHeaderCell from "../../TableHeaderCell/TableHeaderCell";
import TableBody from "../../TableBody/TableBody";
import TableVirtualizedBody from "../../TableVirtualizedBody/TableVirtualizedBody";
import TableRow from "../../TableRow/TableRow";
import TableCell from "../../TableCell/TableCell";
import Label from "../../../Label/Label";
import Flex from "../../../Flex/Flex";
import {
  emailColumns,
  emailTableData,
  priorityColumnToLabelColor,
  scrollTableColumns,
  scrollTableData,
  sort,
  statusColumnToLabelColor,
  TableAvatar,
  TableEmptyState,
  TableErrorState,
  virtualizedScrollTableColumns,
  virtualizedScrollTableData
} from "./table.stories.helpers";



export default {
  title: "Example/VibeTable",
  component: Table,
  subcomponents: {
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
    TableVirtualizedBody
  },
  tags: ['autodocs'],
};

const tableTemplate = args => <Table {...args}></Table>;

export const Overview = {
  render: tableTemplate.bind({}),
  args: {
    errorState: <TableErrorState />,
    emptyState: <TableEmptyState />,
    columns: [
      {
        id: "sentOn",
        title: "Sent on",
        width: 150,
        loadingStateType: "medium-text"
      },
      {
        id: "subject",
        title: "Subject",
        loadingStateType: "long-text"
      },
      {
        id: "sentBy",
        title: "Sent by",

        width: {
          min: 120,
          max: 200
        },

        infoContent: "This is the sender",
        loadingStateType: "circle"
      },
      {
        id: "status",
        title: "Status",
        width: 150,
        infoContent: "Info content for the status column",
        loadingStateType: "medium-text"
      },
      {
        id: "emailsSent",
        title: "Emails sent",
        width: 150,
        loadingStateType: "medium-text"
      }
    ],
    children: [
      <TableHeader>
        {[
          {
            id: "sentOn",
            title: "Sent on",
            width: 150,
            loadingStateType: "medium-text"
          },
          {
            id: "subject",
            title: "Subject",
            loadingStateType: "long-text"
          },
          {
            id: "sentBy",
            title: "Sent by",

            width: {
              min: 120,
              max: 200
            },

            infoContent: "This is the sender",
            loadingStateType: "circle"
          },
          {
            id: "status",
            title: "Status",
            width: 150,
            infoContent: "Info content for the status column",
            loadingStateType: "medium-text"
          },
          {
            id: "emailsSent",
            title: "Emails sent",
            width: 150,
            loadingStateType: "medium-text"
          }
        ].map((headerCell, index) => (
          <TableHeaderCell key={index} title={headerCell.title} />
        ))}
      </TableHeader>,
      <TableBody>
        {[
          {
            id: "1",
            sentOn: "2020-01-01",
            sentBy: "John Doe",
            subject: "Lorem ipsum dolor",
            status: "Sent",
            emailsSent: 100
          },
          {
            id: "3",
            sentOn: "2023-03-03",
            sentBy: "Some Person",
            subject:
              "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
            status: "Sent",
            emailsSent: 999
          },
          {
            id: "2",
            sentOn: "2022-02-02",
            sentBy: "Other Name",
            subject: "This is the subject",
            status: "Sent",
            emailsSent: 99
          }
        ].map(rowItem => (
          <TableRow key={rowItem.id}>
            <TableCell>{rowItem.sentOn}</TableCell>
            <TableCell>{rowItem.subject}</TableCell>
            <TableCell>
              <TableAvatar text={rowItem.sentBy} />
            </TableCell>
            <TableCell>
              <Label text={rowItem.status} color="positive" isAnimationDisabled />
            </TableCell>
            <TableCell>{rowItem.emailsSent}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    ]
  },
  name: "Overview"
};

export const Sizes = {
  render: () => {
    const columns = [
      {
        id: "sentOn",
        title: "Sent on",
        width: 180,
        loadingStateType: "medium-text"
      },
      {
        id: "subject",
        title: "Subject",
        width: 200,
        loadingStateType: "long-text"
      }
    ];
    const data = [
      {
        id: 1,
        sentOn: "2020-01-01",
        subject: "Lorem ipsum dolor"
      },
      {
        id: 2,
        sentOn: "2022-02-02",
        subject: "This is the subject"
      }
    ];
    return (
      <>
        <Table
          style={{ width: "auto" }}
          size={Table.sizes.MEDIUM}
          errorState={<TableErrorState />}
          emptyState={<TableEmptyState />}
          columns={columns}
        >
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell
                key={index}
                title={headerCell.title}
                icon={headerCell.icon}
                infoContent={headerCell.infoContent}
              />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table
          style={{ width: "auto" }}
          size={Table.sizes.LARGE}
          errorState={<TableErrorState />}
          emptyState={<TableEmptyState />}
          columns={columns}
        >
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell
                key={index}
                title={headerCell.title}
                icon={headerCell.icon}
                infoContent={headerCell.infoContent}
              />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
  decorators: [
    Story => (
      <Flex align={Flex.align.START} justify={Flex.justify.SPACE_BETWEEN} style={{ flex: 1 }}>
        <Story />
      </Flex>
    )
  ],
  name: "Sizes"
};

export const Borders = {
  render: () => {
    const columns = [
      {
        id: "sentOn",
        title: "Sent on",
        width: 150,
        loadingStateType: "medium-text"
      },
      {
        id: "subject",
        title: "Subject",
        loadingStateType: "long-text"
      },
      {
        id: "sentBy",
        title: "Sent by",

        width: {
          min: 120,
          max: 200
        },

        infoContent: "This is the sender",
        loadingStateType: "circle"
      },
      {
        id: "status",
        title: "Status",
        width: 150,
        infoContent: "Info content for the status column",
        loadingStateType: "medium-text"
      },
      {
        id: "emailsSent",
        title: "Emails sent",
        width: 150,
        loadingStateType: "medium-text"
      }
    ];
    const data = [
      {
        id: "1",
        sentOn: "2020-01-01",
        sentBy: "John Doe",
        subject: "Lorem ipsum dolor",
        status: "Sent",
        emailsSent: 100
      },
      {
        id: "3",
        sentOn: "2023-03-03",
        sentBy: "Some Person",
        subject:
          "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
        status: "Sent",
        emailsSent: 999
      },
      {
        id: "2",
        sentOn: "2022-02-02",
        sentBy: "Other Name",
        subject: "This is the subject",
        status: "Sent",
        emailsSent: 99
      }
    ];
    return (
      <>
        <Table errorState={<TableErrorState />} emptyState={<TableEmptyState />} columns={columns}>
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell key={index} title={headerCell.title} />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
                <TableCell>
                  <TableAvatar text={rowItem.sentBy} />
                </TableCell>
                <TableCell>
                  <Label text={rowItem.status} color="positive" isAnimationDisabled />
                </TableCell>
                <TableCell>{rowItem.emailsSent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table errorState={<TableErrorState />} emptyState={<TableEmptyState />} columns={columns} withoutBorder>
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell key={index} title={headerCell.title} />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
                <TableCell>
                  <TableAvatar text={rowItem.sentBy} />
                </TableCell>
                <TableCell>
                  <Label text={rowItem.status} color="positive" isAnimationDisabled />
                </TableCell>
                <TableCell>{rowItem.emailsSent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
  decorators: [
    Story => (
      <Flex direction={Flex.directions.COLUMN} gap={40}>
        <Story />
      </Flex>
    )
  ],
  name: "Borders"
};

export const TableHeaderFunctionality = {
  render: () => {
    const [tableData, setTableData] = useState(emailTableData);
    const [sorting, setSorting] = useState({});

    const onSort = (columnId, sortState) => {
      setSorting({
        [columnId]: sortState
      });

      setTableData(sort(columnId, sortState, tableData));
    };

    return (
      <Table errorState={<TableErrorState />} emptyState={<TableEmptyState />} columns={emailColumns}>
        <TableHeader>
          {emailColumns.map((headerCell, index) => (
            <TableHeaderCell
              key={index}
              title={headerCell.title}
              icon={headerCell.icon}
              infoContent={headerCell.infoContent}
              onSortClicked={sortState => onSort(headerCell.id, sortState)}
              sortState={sorting[headerCell.id]}
            />
          ))}
        </TableHeader>
        <TableBody>
          {tableData.map(rowItem => (
            <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} isAnimationDisabled color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },

  name: "Table Header Functionality"
};

export const Loading = {
  render: () => (
    <Table
      dataState={{
        isLoading: true
      }}
      errorState={<TableErrorState />}
      emptyState={<TableEmptyState />}
      columns={emailColumns}
    >
      <TableHeader>
        {emailColumns.map((headerCell, index) => (
          <TableHeaderCell key={index} title={headerCell.title} />
        ))}
      </TableHeader>
      <TableBody>
        {emailTableData.map(rowItem => (
          <TableRow key={rowItem.id}>
            <TableCell>{rowItem.sentOn}</TableCell>
            <TableCell>{rowItem.subject}</TableCell>
            <TableCell>
              <TableAvatar text={rowItem.sentBy} />
            </TableCell>
            <TableCell>
              <Label text={rowItem.status} color="positive" isAnimationDisabled />
            </TableCell>
            <TableCell>{rowItem.emailsSent}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),

  name: "Loading"
};

export const Scroll = {
  render: () => (
    <div
      style={{
        height: 220,
        width: "100%"
      }}
    >
      <Table errorState={<TableErrorState />} emptyState={<TableEmptyState />} columns={scrollTableColumns}>
        <TableHeader>
          {scrollTableColumns.map((headerCell, index) => (
            <TableHeaderCell key={index} title={headerCell.title} />
          ))}
        </TableHeader>
        <TableBody>
          {scrollTableData.map(rowItem => (
            <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>
                <Label
                  text={rowItem.priority}
                  color={priorityColumnToLabelColor[rowItem.priority]}
                  isAnimationDisabled
                />
              </TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color={statusColumnToLabelColor[rowItem.status]} isAnimationDisabled />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),

  name: "Scroll"
};

export const VirtualizedScroll = {
  render: () => {
    const Row = ({ _id, num, text }) => {
      return (
        <TableRow>
          <TableCell>{num}</TableCell>
          <TableCell>{text}</TableCell>
        </TableRow>
      );
    };

    return (
      <Table
        errorState={<TableErrorState />}
        emptyState={<TableEmptyState />}
        columns={virtualizedScrollTableColumns}
        style={{
          height: 250
        }}
      >
        <TableHeader>
          {virtualizedScrollTableColumns.map((cell, index) => (
            <TableHeaderCell key={index} {...cell} />
          ))}
        </TableHeader>
        <TableVirtualizedBody rowRenderer={Row} items={virtualizedScrollTableData} />
      </Table>
    );
  },

  name: "Virtualized Scroll"
};

export const HighlightedRow = {
  render: () => {
    const shouldRowBeHighlighted = rowItem => {
      return rowItem.id === "2";
    };

    return (
      <Table errorState={<TableErrorState />} emptyState={<TableEmptyState />} columns={emailColumns}>
        <TableHeader>
          {emailColumns.map((headerCell, index) => (
            <TableHeaderCell key={index} title={headerCell.title} />
          ))}
        </TableHeader>
        <TableBody>
          {emailTableData.map(rowItem => (
            <TableRow key={rowItem.id} highlighted={shouldRowBeHighlighted(rowItem)}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} isAnimationDisabled color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },

  name: "Highlighted row"
};
